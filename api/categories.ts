import api from "./config";

export async function FetchCategories(): Promise<any> {
    const response =  await api.get("category")
    return response.data
}