import axios from "axios";

const API = axios.create({
<<<<<<< HEAD
  baseURL: "https://localhost:4000/api/",
=======
  baseURL: "https://fitness-tracker-9lhq-qd58m62rh-srikars-projects-56492000.vercel.app",
>>>>>>> 04edc154a3b59bee71a6a601e9fa42d1d7d9f587
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get(`/user/workout${date}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post(`/user/workout`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
