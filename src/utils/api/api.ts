import axios from "axios";
import { Endpoints } from "./endpoints";

const api = axios.create({
  baseURL: Endpoints.base(),
});

export default api;
