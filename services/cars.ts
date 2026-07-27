import { GetCarsResponse } from "@/types/cars";
import { server } from "./serverConfig";

export const getCars = async () => {
  const res = await server.get<GetCarsResponse>("/public/cars");
  return res.data;
};
