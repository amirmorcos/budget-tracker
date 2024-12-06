import axios from "axios";

const api = axios.create({
  baseURL: "https://6753160ff3754fcea7bab6cb.mockapi.io/",
  timeout: 2000,
});

export default api;
