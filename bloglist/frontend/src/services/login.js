import apiClient from "../utils/apiClient";
const baseUrl = "/login";

const login = async (credentials) => {
  const response = await apiClient.post(baseUrl, credentials);
  return response.data;
};

const exports = { login };
export default exports;
