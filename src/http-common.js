import axios from "axios";

const loggedIn = localStorage.getItem('user');

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + JSON.parse(loggedIn).accessToken
  }
});
