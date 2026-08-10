import { serverApi } from "@/types/serverApi";
import { GetMoviesResponse, Movie } from "@/types/movies";

export const getMovies = async () => {
  const res = await serverApi.get<GetMoviesResponse>("/public/movies");
  return res.data;
};

export const getMovieById = async (id: string) => {
  const res = await serverApi.get<Movie>(`/public/movies/${id}`);
  return res.data;
};
