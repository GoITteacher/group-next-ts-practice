import { GetSongsResponse } from "@/types/songs";
import { server } from "./serverConfig";

export const getSongs = async () => {
  const res = await server.get<GetSongsResponse>("/public/songs");
  return res.data;
};
