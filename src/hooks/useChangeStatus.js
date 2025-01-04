import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeStatus as changeStatusApi } from "../services/apiAppartments";
import { useMessage } from "../contexts/MessageContext";

function useChangeStatus() {
  const queryClient = useQueryClient();
  const { errorMessage, successMessage } = useMessage();

  const { mutate: changeStatus, isLoading: isChanging } = useMutation({
    mutationFn: changeStatusApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appartments"] });
      queryClient.invalidateQueries({ queryKey: ["bookmarks"] });
      successMessage("Статус успішно змінено");
    },
    onError: (err) => {
      console.error(err);
      errorMessage("Помилка при зміні статусу");
    },
  });
  return { isChanging, changeStatus };
}
export { useChangeStatus };
