import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL
})

api.interceptors.request.use((config) => {
    config.headers['sw-access-key'] = process.env.NEXT_PUBLIC_SW_ACCESS_KEY
    config.headers['sw-context-token'] = process.env.NEXT_PUBLIC_SW_CONTEXT_TOKEN
    return config
})

export default api