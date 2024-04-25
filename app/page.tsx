import { OpenAI } from "@/components/templates/OpenAI/OpenAI";
import { fetchDataWithQS } from "@/lib/api";

export default async function Home() {
  const data = await fetchDataWithQS("main-page", { populate: "*" });

  return (
    <>
      <OpenAI />
    </>
  );
}
