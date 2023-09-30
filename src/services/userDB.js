import axios from "axios";

const getUser = async (callback) => {
  try {
    const res = await axios.get(
      "https://6517bef9582f58d62d3519a6.mockapi.io/api/culinarycrossroads/users"
    );
    callback(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(
      `https://6517bef9582f58d62d3519a6.mockapi.io/api/culinarycrossroads/users?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user : ", error);
    throw error;
  }
};

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(
      "https://6517bef9582f58d62d3519a6.mockapi.io/api/culinarycrossroads/users",
      newUser
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user : ", error);
    throw error;
  }
};

export const createUserCart = async (userId, cart) => {
  try {
    const response = await axios.post(
      `https://6517bef9582f58d62d3519a6.mockapi.io/api/culinarycrossroads/users/${userId}/userCart/`,
      cart
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user cart : ", error);
    throw error;
  }
};

export const getUserCart = async (userId) => {
  try {
    const response = await axios.get(
      `https://6517bef9582f58d62d3519a6.mockapi.io/api/culinarycrossroads/users/${userId}/userCart/${userId}`
    );
    const cart = response.data.cart;
    return cart;
  } catch (error) {
    console.error("Error fetching user cart : ", error);
    throw error;
  }
};

export const updateUserCart = async (userId, cart) => {
  try {
    const response = await axios.put(
      `https://6517bef9582f58d62d3519a6.mockapi.io/api/culinarycrossroads/users/${userId}/userCart/${userId}`,
      cart
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user cart : ", error);
    throw error;
  }
};

export default getUser;
