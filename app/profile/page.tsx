import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Profile Page</h1>
      <ProfileInfo />
    </div>
  );
};

export default Page;
