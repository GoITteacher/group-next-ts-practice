import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CocktaisClientPage from "./CocktaisClientPage";
import { getRandomCocktails } from "@/services/cocktails";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cocktails"],
    queryFn: () => getRandomCocktails(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CocktaisClientPage />
    </HydrationBoundary>
  );
};

export default Page;
