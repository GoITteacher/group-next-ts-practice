"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./CocktaisClientPage.module.css";
import { getRandomCocktails } from "@/services/cocktails";

const CocktaisClientPage = () => {
  const query = useQuery({
    queryKey: ["cocktails"],
    queryFn: () => getRandomCocktails(),
    refetchOnMount: false,
  });

  const cocktails = query.data || [];

  return (
    <div className={css["cocktaisClientPage"]}>
      <button onClick={() => query.refetch()}>Get Random Cocktails</button>

      <ul>
        {cocktails.map((el) => {
          return <li>{el.drink}</li>;
        })}
      </ul>
    </div>
  );
};

export default CocktaisClientPage;
