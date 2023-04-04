import { useQuery } from "@tanstack/react-query"
import { Products } from "api/products"

export const useFetchProducts = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () => Products(),
        onError: (error) => {

        }
    })

    return  { data, isLoading }
}