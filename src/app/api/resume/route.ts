import { payload } from "@/lib/payload";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { resume } = await payload.findGlobal({ slug: "home" });

  const rawUrl = typeof resume === "object" && resume?.url ? resume.url : null;

  if (!rawUrl) {
    return new Response("Resume not found", { status: 404 });
  }

  // Older records may still point at Payload's local file route (a relative
  // path); resolve those against the current origin so `fetch` accepts them.
  const url = new URL(rawUrl, request.nextUrl.origin).toString();

  const upstream = await fetch(url);

  if (!upstream.ok || !upstream.body) {
    return new Response("Failed to fetch resume", { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Software_Engineer_Muhammad_Sheikh_Rukon.pdf"',
      ...(upstream.headers.get("content-length")
        ? { "Content-Length": upstream.headers.get("content-length")! }
        : {}),
    },
  });
}
