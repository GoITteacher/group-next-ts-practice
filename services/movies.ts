import { server } from "./serverConfig";
import { GetMoviesResponse } from "@/types/movies";

export const getMovies = async () => {
  const res = await server.get<GetMoviesResponse>("/public/movies");
  return res.data;
};
