import axios from "axios";
import { ElNotification } from "element-plus";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
// Interceptor cho request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor cho response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirect to login...");
    }
    if (error.response.status === 400) {
      const errorMessages = error.response.data.message;

      // Check if the message is an array
      if (Array.isArray(errorMessages)) {
        const allMessageError = errorMessages
          .map((err) => `- ${err}`)
          .join("<br>"); // Add '-' before each error

        ElNotification({
          title: "Lỗi chi tiết",
          message: allMessageError,
          type: "error",
          dangerouslyUseHTMLString: true, // Allow HTML for <br> to work
        });
      } else {
        ElNotification({
          title: "Lỗi chi tiết",
          message: errorMessages || "Đã xảy ra lỗi!",
          type: "error",
        });
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
