import { useQuery } from "@tanstack/react-query";
import { fetchAppartments } from "../services/apiAppartments";

export function useAppartments(filters) {
  const {
    isLoading,
    data: appartments,
    error,
  } = useQuery({
    queryKey: ["appartments", filters],
    queryFn: () => fetchAppartments(filters),
    staleTime: 60 * 1000,
  });
  return { isLoading, appartments, error };
}
