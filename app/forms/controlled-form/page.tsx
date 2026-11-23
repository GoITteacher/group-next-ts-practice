import Form2 from "@/components/Form2/Form2";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Контрольовані компоненти</h1>
      <Form2 />
    </div>
  );
};

export default Page;
