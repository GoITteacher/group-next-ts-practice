import Form3 from "@/components/Form3/Form3";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Formik</h1>

      <Form3 />
    </div>
  );
};

export default Page;
