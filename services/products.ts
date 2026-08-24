import { proxyServer } from "./server-config";

export const getProducts = async (params: any) => {
  const res = await proxyServer.get("/products", { params });
  return res.data;
};
