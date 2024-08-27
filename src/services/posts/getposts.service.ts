import { URL_API_GETPOSTS } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

export const getPosts = async (): Promise<any[]> => {
    const res = await apiClient.get(`${URL_API_GETPOSTS}`);
    return res.data;
};

type QueryFnType = typeof getPosts;

type UsePostsOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const usePosts = ({ config }: UsePostsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ["tags"],
        queryFn: () => getPosts(),
    });
};
