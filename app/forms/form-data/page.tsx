import Form1 from "@/components/Form1/Form1";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Form Data</h1>

      <Form1 />
    </div>
  );
};

export default Page;
