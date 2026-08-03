import { getUsers } from "@/services/users";
import css from "./Page.module.css";
import Link from "next/link";

const Page = async () => {
  const res = await getUsers();
  return (
    <div className={css["page"]}>
      {res.items.map((el) => {
        return (
          <li>
            <Link href={`/users/${el._id}`}>
              {el.firstName} {el.lastName}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
