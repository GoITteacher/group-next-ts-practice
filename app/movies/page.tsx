import { getMovies } from "@/services/movies";
import css from "./page.module.css";
import Link from "next/link";

const Page = async () => {
  const res = await getMovies();
  const movies = res.items;

  return (
    <div className={css["page"]}>
      {movies.map((el) => {
        return (
          <li key={el._id}>
            <Link href={`/movies/${el._id}`}>{el.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
