import { proxyServer } from "./server-config";

export const getTodos = async (params: any) => {
  const res = await proxyServer.get("/todos", { params });
  return res.data;
};
