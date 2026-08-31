import { Product, ProductBody, ProductResponse } from "@/types/products";
import { proxyServer } from "./server-config";

export const getProducts = async (params: any) => {
  const res = await proxyServer.get<ProductResponse>("/products", { params });
  return res.data;
};

export const createProduct = async (product: ProductBody) => {
  const res = await proxyServer.post<Product>("/products", product);
  return res.data;
};
export const removeProduct = async (id: string) => {
  const res = await proxyServer.delete<Product>(`/products/${id}`);
  return res.data;
};
