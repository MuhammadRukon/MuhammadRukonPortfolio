import { payload } from "@/lib/payload";

export default async function Page() {
  const data = await payload.find({ collection: "education" });
  const docs = data?.docs ?? [];

  return (
    <div>
      <ul>
        {docs.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
