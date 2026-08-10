import { getCars } from "@/services/cars";
import css from "./page.module.css";
import Link from "next/link";

const Page = async () => {
  const res = await getCars();
  console.log(res);
  return (
    <div className={css["page"]}>
      <h1>Car list:</h1>
      {res.items.map((el) => {
        return (
          <li key={el._id}>
            <Link href={`/cars/${el._id}`}>MODEL - {el.model}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
