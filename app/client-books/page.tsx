import ClientsBooks from "@/components/ClientsBooks/ClientsBooks";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <ClientsBooks />
    </div>
  );
};

export default Page;
