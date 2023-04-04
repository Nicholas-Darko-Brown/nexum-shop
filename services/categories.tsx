import { useQuery } from "@tanstack/react-query";
import { FetchCategories } from "api/categories";

export const useFetchCategories = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["nav-categories"],
        queryFn: () => FetchCategories(),
        onError: (error) => {
            console.error("Error fetching categories:", error);
        }
    })

    return { data, isLoading }
}