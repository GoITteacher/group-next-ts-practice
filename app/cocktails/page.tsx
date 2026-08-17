import { getRandomCocktails } from "@/services/cocktails";
import css from "./page.module.css";

const Page = async () => {
  const res = await getRandomCocktails();

  return (
    <div className={css["page"]}>
      <h1>Cocktails list</h1>
      {res.map((el) => {
        return <li key={el._id}>{el.drink}</li>;
      })}
    </div>
  );
};

export default Page;
