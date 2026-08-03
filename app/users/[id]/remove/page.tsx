import Link from "next/link";
import css from "./Page.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return (
    <div className={css["page"]}>
      <h2>Ви дійсно бажаєте видалити</h2>
      <button>Так</button>
      <Link href={`/users/${id}`}>Ні</Link>
    </div>
  );
};

export default Page;
