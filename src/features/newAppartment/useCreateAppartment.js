import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAppartment as createAppartmentApi } from "../../services/apiAppartments";

function useCreateAppartment() {
  const queryClient = useQueryClient();

  const { mutate: createAppartment, isLoading: isCreating } = useMutation({
    mutationFn: createAppartmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appartments"] });
    },
    onError: (err) => console.error(err),
  });
  return { isCreating, createAppartment };
}

export default useCreateAppartment;
