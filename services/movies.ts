import { serverApi } from "@/types/serverApi";
import { GetMoviesParams, GetMoviesResponse, Movie } from "@/types/movies";

export const getMovies = async (params: GetMoviesParams) => {
  const res = await serverApi.get<GetMoviesResponse>("/public/movies", {
    params,
  });
  return res.data;
};

export const getMovieById = async (id: string) => {
  const res = await serverApi.get<Movie>(`/public/movies/${id}`);
  return res.data;
};
