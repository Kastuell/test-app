import dynamic from "next/dynamic";

const FormPage = dynamic(
  () => import("@/shared/components").then((module) => module.FormPage),
  {
    ssr: false,
  }
);

export default function Home() {
  return <FormPage />;
}
