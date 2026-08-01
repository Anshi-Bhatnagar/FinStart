import axios from "axios";

const BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const buyStock = async (data) => {
  const response = await api.post(
    "/paper-trading/buy",
    data
  );

  return response.data;
};

export const getHoldings = async () => {
  const response = await api.get(
    "/paper-trading/holdings"
  );

  return response.data;
};

export const getPortfolio = async () => {
  const response = await api.get(
    "/paper-trading/portfolio"
  );

  return response.data;
};

export const sellStock = async (data) => {
  const response = await api.post(
    "/paper-trading/sell",
    data
  );

  return response.data;
};

export const getTradeHistory = async () => {
  const response = await api.get(
    "/paper-trading/history"
  );

  return response.data;
};