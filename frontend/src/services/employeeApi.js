import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-management-system-10j2.onrender.com/api/employees",
});

export const getEmployees = () => API.get("/");
export const addEmployee = (data) => API.post("/", data);
export const updateEmployee = (id, data) => API.put(`/${id}`, data);
export const deleteEmployee = (id) => API.delete(`/${id}`);
