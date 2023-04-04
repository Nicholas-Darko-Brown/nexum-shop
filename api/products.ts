import { IProducts } from "@/types/interfaces/interfaces";
import api from "./config";

export async function Products(): Promise<IProducts> {
    const response = await api.get<IProducts>("product")
    return response.data
}