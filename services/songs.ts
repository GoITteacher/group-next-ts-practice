import { serverApi } from "@/types/serverApi";
import { GetSongsResponse, Song } from "@/types/songs";

interface GetSongsParams {
  page?: number;
  perPage?: number;
  artist?: string;
}

export const getSongs = async (params: GetSongsParams) => {
  const res = await serverApi.get<GetSongsResponse>("/public/songs", {
    params,
  });
  return res.data;
};

export const getSongById = async (id: string) => {
  const res = await serverApi.get<Song>(`/public/songs/${id}`);
  return res.data;
};
