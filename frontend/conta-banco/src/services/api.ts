// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/conta", // sem duplicar 'conta'
});

export default api;