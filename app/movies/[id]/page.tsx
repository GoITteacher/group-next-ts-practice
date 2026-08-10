import { getMovieById } from "@/services/movies";
import css from "./page.module.css";

interface MoviesProps {
  params: Promise<{ id: string }>;
}
const Page = async ({ params }: MoviesProps) => {
  const { id } = await params;
  const res = await getMovieById(id);

  return (
    <div className={css["page"]}>
      {res.title}
      {res.genre}
      {res.language}
      {res.rating}
      {res.releaseYear}
    </div>
  );
};

export default Page;
