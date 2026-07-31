import axios from "axios";

// Change this according to your backend URL
const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Automatically attach JWT token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * Send a message to AI
 */
export const sendMessage = async (message, conversationId = null) => {
  try {
    const response = await API.post("/ai/chat", {
      message,
      conversation_id: conversationId,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

/**
 * Fetch previous chat history
 */
export const getChatHistory = async (conversationId) => {
  try {
    const response = await API.get(`/ai/history/${conversationId}`);

    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
