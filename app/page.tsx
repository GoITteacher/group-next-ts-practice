import ProductList from "@/components/ProductList/ProductList";
import css from "./page.module.css";
import CreateProductForm from "@/components/CreateProductForm/CreateProductForm";

const Page = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <CreateProductForm />
      <ProductList />
    </div>
  );
};

export default Page;
