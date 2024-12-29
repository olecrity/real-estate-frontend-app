import { useQuery } from "@tanstack/react-query";
import { fetchAptFullInfo } from "../../services/apiAppartments";

export function useAptFullInfo(id) {
  const {
    isLoading,
    data: appartmentInfo,
    error,
  } = useQuery({
    queryKey: ["appartmentInfo", id],
    queryFn: () => fetchAptFullInfo(id),
    staleTime: 60 * 1000,
  });
  return { isLoading, appartmentInfo, error };
}
