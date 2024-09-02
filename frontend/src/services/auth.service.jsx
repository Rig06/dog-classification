import axios from "axios";

const API_URL = "/api/basicuser";

const register = (name, userName, email, password) => {
  return axios.post(`${API_URL}/signup`, {
    name,
    userName,
    email,
    password,
  });
};
const login = (email, password) => {
  return axios
    .post(`${API_URL}/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("Logged in successfully:", JSON.parse(localStorage.getItem("user")));
      }
      return response.data;
    });
};
const logout = () => {
  console.log("Logging out from auth service");
  localStorage.removeItem("user");
};
export default {
  register,
  login,
  logout,
};
