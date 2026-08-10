import SongList from "@/components/SongList/SongList";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>All Songs Page</h1>
      <SongList />
    </div>
  );
};

export default Page;
