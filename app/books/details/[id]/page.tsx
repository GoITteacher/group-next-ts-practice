import { getBookById } from "@/services/books";
import css from "./page.module.css";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const book = await getBookById(id);

  return (
    <div className={css["page"]}>
      <h1>{book.title}</h1>
      <img src={book.book_image} />
    </div>
  );
};

export default Page;
