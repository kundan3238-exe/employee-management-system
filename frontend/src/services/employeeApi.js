import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/employees",
});

export const getEmployees = () => API.get("/");
export const addEmployee = (data) => API.post("/", data);
export const updateEmployee = (id, data) => API.put(`/${id}`, data);
export const deleteEmployee = (id) => API.delete(`/${id}`);
