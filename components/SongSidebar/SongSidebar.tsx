import Link from "next/link";
import css from "./SongSidebar.module.css";

const SongSidebar = () => {
  return (
    <div className={css["songSidebar"]}>
      <Link href="/songs">All Songs</Link>
      <Link href="/songs/pop">Pop Songs</Link>
      <Link href="/songs/rock">Rock Songs</Link>
      <Link href="/songs/electro">Electro Songs</Link>
    </div>
  );
};

export default SongSidebar;
