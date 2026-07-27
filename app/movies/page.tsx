import { getMovies } from "@/services/movies";
import css from "./page.module.css";

import Link from "next/link";

const Page = async () => {
  const res = await getMovies();

  return (
    <div className={css["page"]}>
      <h1>Movies list:</h1>
      <ul>
        {res.items.map((el) => {
          return <li> {el.title}</li>;
        })}
      </ul>
      <Link href="/movies/create">Create</Link>
    </div>
  );
};

export default Page;
