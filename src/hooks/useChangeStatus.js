import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeStatus as changeStatusApi } from "../services/apiAppartments";

function useChangeStatus() {
  const queryClient = useQueryClient();

  const { mutate: changeStatus, isLoading: isChanging } = useMutation({
    mutationFn: changeStatusApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appartments"] });
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
    },
    onError: (err) => console.error(err),
  });
  return { isChanging, changeStatus };
}
export { useChangeStatus };
