import { getBooksByCategory } from "@/services/books";
import css from "./page.module.css";
import Link from "next/link";

interface PageProps {
  params: Promise<{ category: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { category } = await params;
  const normalCategory = category.replaceAll("%20", " ");
  const res = await getBooksByCategory(normalCategory);

  return (
    <div className={css["page"]}>
      <h3>{normalCategory}:</h3>
      <ul>
        {res.map((el) => {
          return (
            <li key={el._id}>
              <Link href={`/books/details/${el._id}`}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
