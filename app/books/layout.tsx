import CategoryList from "@/components/CategoryList/CategoryList";
import css from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      <CategoryList />
      {children}
    </div>
  );
};

export default Layout;
