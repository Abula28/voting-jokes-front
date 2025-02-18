import axios from "axios";

export const axiosClient = axios.create({
  baseURL: new URL(import.meta.env.VITE_APP_API_URL).toString(),
  headers: {
    "Content-Type": "application/json",
  },
});
