import MovieCreate from "@/components/MovieCreate/MovieCreate";
import css from "./page.module.css";
import Link from "next/link";

const Page = () => {
  return (
    <div className={css["page"]}>
      <MovieCreate />
      <Link href="/movies">Go back</Link>
    </div>
  );
};

export default Page;
