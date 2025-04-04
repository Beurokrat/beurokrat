import axios from "axios";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true, // Ensures cookies (JWT) are sent with requests
});

// Request Interceptor: Extract token from cookies
axiosInstance.interceptors.request.use((config) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Set Authorization header
  }

  return config;
});

// Response Interceptor: Handle 401 errors (Invalid Token)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.href = "/login"; // Redirect to login
    }
    return Promise.reject(error);
  }
);



export default axiosInstance;
