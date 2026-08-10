"use client";
import { useState } from "react";
import css from "./ClientsBooks.module.css";
import { useQuery } from "@tanstack/react-query";
import { getBooksByCategory } from "@/services/books";

const ClientsBooks = () => {
  const [category, setCategory] = useState("");

  const handleSearch = async (formData: FormData) => {
    const categoryBooks = formData.get("category") as string;
    setCategory(categoryBooks);
  };

  const queryBook = useQuery({
    queryKey: ["books", category],
    queryFn: () => getBooksByCategory(category),
  });
  const books = queryBook.data || [];
  return (
    <div className={css["clientsBooks"]}>
      <form action={handleSearch}>
        <input name="category" type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {books.map((item, i) => {
          return <li key={i}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ClientsBooks;
