import axios from "axios";
import baseUrl from "./baseurl";

export const loginApi = async (data) => {
  const response = await axios.post(`${baseUrl}/auth/login`, {
    username: data.username,
    password: data.password,
  });
  return response.data;
};

export const getProductList = async ({ pageParam = 0 }) => {
  const limit = 12;
  const response = await axios.get(
    `${baseUrl}/products?limit=${limit}&skip=${pageParam}`,
  );
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${baseUrl}/products`);
  return response.data;
};
