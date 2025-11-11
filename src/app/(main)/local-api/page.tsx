import { localApi } from "@/lib/payload";

export default async function Page() {
  const result = await localApi("education");
  const docs = result?.docs ?? [];

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
