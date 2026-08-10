import { serverApi } from "@/types/serverApi";
import { GetCarsResponse, Car } from "@/types/cars";

export const getCars = async () => {
  const res = await serverApi.get<GetCarsResponse>("/public/cars");
  return res.data;
};

export const getCarById = async (id: string) => {
  const res = await serverApi.get<Car>(`/public/cars/${id}`);
  return res.data;
};
