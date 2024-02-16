import { apiClient } from "./ApiClient";

export const searchTextApi = (payload) => apiClient.post(`/ocr`, payload)