import axiosInstance from "./axiosInstance";


// Login user
export const loginUser = async (credentials) => {
    const response = await axiosInstance.post("https://movie-webapp-backend-ties.onrender.com/api/auth/login", credentials);
    return response.data;
};


// Register user
export const registerUser = async (userData) => {
    const response = await axiosInstance.post("https://movie-webapp-backend-ties.onrender.com/api/auth/register", userData);
    return response.data;
};


// Get logged-in user profile
export const getProfile = async () => {
    const response = await axiosInstance.get("https://movie-webapp-backend-ties.onrender.com/auth/profile");
    return response.data;
};
