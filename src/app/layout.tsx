import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Docker } from "@/components/docker/docker";
import { ModalProvider } from "@/components/modal/ModalProvider";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rukon - SWE",
  description: "A frontend focused software engineer's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black dark`}>
        <ModalProvider>
          {children}
          <Docker />
        </ModalProvider>
      </body>
    </html>
  );
}
