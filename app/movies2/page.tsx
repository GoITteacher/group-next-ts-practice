import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import css from "./page.module.css";
import { getMovies } from "@/services/movies";
import MoviesClient from "@/components/MoviesClient/MoviesClient";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["movies", ""],
    queryFn: () => getMovies({ title: "" }),
  });

  return (
    <div className={css["page"]}>
      <h1>Movies</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <MoviesClient />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
