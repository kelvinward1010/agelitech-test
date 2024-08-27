import { URL_API_GETTAGS } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

export const getTags = async (): Promise<any[]> => {
    const res = await apiClient.get(`${URL_API_GETTAGS}`);
    return res.data;
};

type QueryFnType = typeof getTags;

type UseTagsOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const useTags = ({ config }: UseTagsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ["tags"],
        queryFn: () => getTags(),
    });
};
