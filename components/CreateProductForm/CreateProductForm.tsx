"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./CreateProductForm.module.css";
import { createProduct } from "@/services/products";
import { ProductBody } from "@/types/products";

const CreateProductForm = () => {
  const queryClient = useQueryClient();

  const createProductMutation = useMutation({
    mutationKey: ["create-product"],
    mutationFn: (product: ProductBody) => createProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: () => {},
  });

  const handleSubmit = (formData: FormData) => {
    const item = {
      name: formData.get("name") as string,
      img: formData.get("img") as string,
      category: formData.get("category") as string,
      price: Number(formData.get("price")),
      size: formData.get("size") as string,
      is10PercentOff: Boolean(formData.get("is10PercentOff")),
      popularity: Number(formData.get("popularity")),
    };

    createProductMutation.mutate(item);
  };

  return (
    <div className={css["createProductForm"]}>
      <form action={handleSubmit}>
        <input type="text" name="name" defaultValue="Test" />
        <input type="text" name="img" defaultValue="" />
        <input type="text" name="category" defaultValue="Fresh_Produce" />
        <input type="number" name="price" defaultValue={25} />
        <input type="text" name="size" defaultValue="Per pound" />
        <input type="checkbox" name="is10PercentOff" defaultChecked={true} />
        <input type="number" name="popularity" defaultValue={100} />

        <button>Create Product</button>
      </form>
    </div>
  );
};

export default CreateProductForm;
