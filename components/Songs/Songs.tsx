"use client";
import { useState } from "react";
import css from "./Songs.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSongs } from "@/services/songs";

const Songs = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    setTitle(title);
  };

  const songsQuery = useQuery({
    queryKey: ["title", title],
    queryFn: () => getSongs({ title }),
    refetchOnMount: false,
  });

  const songs = songsQuery.data?.items || [];

  return (
    <div className={css["songs"]}>
      Songs:
      <form action={handleSubmit}>
        <input type="text" name="title" />
        Title
        <button type="submit"> Search</button>
        {songs.map((el) => {
          return <li>{el.title}</li>;
        })}
      </form>
    </div>
  );
};

export default Songs;
