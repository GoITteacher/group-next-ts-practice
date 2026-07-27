import { getSongs } from "@/services/songs";
import css from "./page.module.css";

const Page = async () => {
  const res = await getSongs();

  return (
    <div className={css["page"]}>
      Page
      <h4>Title: </h4>
      <ul>
        {res.items.map((el) => {
          return (
            <li>
              {el.artist}
              {el.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
