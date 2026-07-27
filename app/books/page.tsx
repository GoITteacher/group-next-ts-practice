import TestButton from "@/components/TestButton/TestButton";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Books Page</h1>

      <TestButton />
    </div>
  );
};

export default Page;
