"use client";
import { useState } from "react";
import css from "./MoviesClient.module.css";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "@/services/movies";

const MoviesClient = () => {
  const [title, setTitle] = useState("");

  const handleSearch = (formData: FormData) => {
    const title = formData.get("title") as string;
    setTitle(title);
  };

  const moviesQuery = useQuery({
    queryKey: ["movies", title],
    queryFn: () => getMovies({ title }),
    refetchOnMount: false,
  });

  const res = moviesQuery.data?.items || [];

  return (
    <div className={css["moviesClient"]}>
      <form action={handleSearch}>
        <input name="title" type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {res.map((el) => {
          return <li key={el._id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default MoviesClient;
