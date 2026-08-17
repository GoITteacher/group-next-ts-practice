import MoviesClient from "@/components/MoviesClient/MoviesClient";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <MoviesClient />
    </div>
  );
};

export default Page;
