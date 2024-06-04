import axios from "axios";
const Base_url = "http://localhost:8000";
const token = localStorage.getItem("token");
const API = axios.create({
  baseURL: Base_url,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const createUser = (Data) => API.post("/auth/SignUp", Data);
export const loginUser = (Data) => API.post("/auth/Login", Data);
export const loginAdmin = (Data) => API.post("/Admin/Login", Data);