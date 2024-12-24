import apiClient from "../utils/apiClient";
import userService from "./user";

const baseUrl = "/blogs";

const config = () => {
  return {
    headers: { Authorization: `bearer ${userService.getToken()}` },
  };
};

const getAll = () => {
  const request = apiClient.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await apiClient.post(baseUrl, newObject, config());
  return response.data;
};

const update = async (id, newObject) => {
  const response = await apiClient.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const addComment = async (id, newComment) => {
  const response = await apiClient.post(`${baseUrl}/${id}/comments`, {
    content: newComment,
  });
  return response.data;
};

const deleteBlog = async (id) => {
  const response = await apiClient.delete(`${baseUrl}/${id}`, config());
  return response;
};

const exports = {
  getAll,
  create,
  update,
  addComment,
  deleteBlog,
};
export default exports;
