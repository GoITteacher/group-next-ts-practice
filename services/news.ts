import { proxyServer } from "./server-config";

export const getNews = async () => {
  const res = await proxyServer.get("/news");
  return res.data;
};
