import axios from "axios";

const api = axios.create({
  baseURL: "https://food-crud-server.vercel.app/api",
});

export default api;
