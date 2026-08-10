"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./SongList.module.css";
import { useState } from "react";
import { getSongs } from "@/services/songs";
import Link from "next/link";

const SongList = () => {
  const [artist, setArtist] = useState("");

  const handleSearch = (formData: FormData) => {
    const value = formData.get("artist") as string;
    setArtist(value);
  };

  const songsQuery = useQuery({
    queryKey: ["songs", artist],
    queryFn: () => getSongs({ artist }),
  });

  const { isLoading, isError } = songsQuery;
  const songs = songsQuery.data?.items || [];

  return (
    <div className={css["songList"]}>
      <form action={handleSearch}>
        <input type="text" name="artist" placeholder="artist" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {songs.map((item, i) => {
          return (
            <li key={i}>
              <Link href={`/songs/${item._id}`}>
                {item.title} {item.artist}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SongList;
