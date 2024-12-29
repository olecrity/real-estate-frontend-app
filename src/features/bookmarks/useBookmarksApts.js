import { useQuery } from "@tanstack/react-query";
import { fetchFavorites } from "../../services/apiAppartments";

export function useBookmarksApts(bookmarks) {
  const {
    isLoading,
    data: bookmarksApts,
    error,
  } = useQuery({
    queryKey: ["bookmarks", bookmarks],
    queryFn: () => fetchFavorites(bookmarks),
    staleTime: 60 * 1000,
  });
  return { isLoading, bookmarksApts, error };
}
