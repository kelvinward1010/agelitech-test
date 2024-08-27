import { URL_API_CREATEPOSTS } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface ICreatePost {
    page: number;
    titles: string;
    tags: string[];
}

export const createPost = async (data: ICreatePost): Promise<any> => {
    const res = await apiClient.post(`${URL_API_CREATEPOSTS}`, data);
    return res.data;
};

type UseCreatePostOptions = {
    config?: MutationConfig<typeof createPost>;
};

export const useCreatePost = ({ config }: UseCreatePostOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: createPost,
    });
};
