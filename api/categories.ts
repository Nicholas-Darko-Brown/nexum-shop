import { ICategoryNames } from "@/types/interfaces/interfaces";
import api from "./config";

export async function FetchCategories(): Promise<ICategoryNames> {
    const response =  await api.get<ICategoryNames>("category")
    return response.data
}