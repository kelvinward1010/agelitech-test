import { URL_API_LOGOUT } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

export const logoutAccount = async (): Promise<any> => {
    const res = await apiClient.delete(`${URL_API_LOGOUT}`);
    return res;
};

type UseLogOutAccountOptions = {
    config?: MutationConfig<typeof logoutAccount>;
};

export const useLogOutAccount = ({ config }: UseLogOutAccountOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: logoutAccount,
    });
};
