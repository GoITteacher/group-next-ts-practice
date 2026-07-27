"use client";
import { log } from "console";
import css from "./MovieCreate.module.css";

const MovieCreate = () => {
  const handleSubmit = (formData: FormData) => {
    console.log("create movie");
  };

  return (
    <div className={css["movieCreate"]}>
      MovieCreate
      <form action={handleSubmit}>
        Create movie
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default MovieCreate;
