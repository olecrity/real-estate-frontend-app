import { QueryCache, useMutation, useQueryClient } from "@tanstack/react-query";
import { createAppartment as createAppartmentApi } from "../../services/apiAppartments";
import { useMessage } from "../../contexts/MessageContext";

function useCreateAppartment() {
  const { errorMessage, successMessage } = useMessage();
  const queryClient = useQueryClient();

  const { mutate: createAppartment, isLoading: isCreating } = useMutation({
    mutationFn: createAppartmentApi,
    onSuccess: () => {
      successMessage("Квартира успішно додана");
      queryClient.invalidateQueries({ queryKey: ["appartments"] });
    },
    onError: (err) => {
      console.error(err);
      errorMessage("Помилка при додаванні квартири");
    },
  });
  return { isCreating, createAppartment };
}

export default useCreateAppartment;
