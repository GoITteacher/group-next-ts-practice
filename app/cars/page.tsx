import { getCars } from "@/services/cars";
import css from "./Page.module.css";
const sleep = (x: number) => new Promise((res) => setTimeout(res, x));

const Page = async () => {
  await sleep(5000);
  const res = await getCars();
  const arr = res.items;

  return (
    <div className={css["page"]}>
      <h1>CARS</h1>
      <ul>
        {arr.map((el) => {
          return (
            <li key={el._id}>
              {el.make} {el.model}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
