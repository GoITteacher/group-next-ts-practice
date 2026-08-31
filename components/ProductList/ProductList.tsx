"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import css from "./ProductList.module.css";
import { getProducts, removeProduct } from "@/services/products";

const ProductList = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({}),
  });

  const products = productsQuery.data?.products || [];

  const removeProductMutation = useMutation({
    mutationKey: ["remove-product"],
    mutationFn: (id: string) => removeProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  return (
    <div className={css["productList"]}>
      <ul>
        {products.map((item, i) => {
          return (
            <li key={i}>
              {item.name}{" "}
              <button
                onClick={() => {
                  removeProductMutation.mutate(item._id);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
