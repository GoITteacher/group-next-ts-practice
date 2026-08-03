import SongSidebar from "@/components/SongSidebar/SongSidebar";
import css from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      <SongSidebar />
      {children}
    </div>
  );
};

export default Layout;
