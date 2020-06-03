import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5qZWV0MjE1MkBnbWFpbC5jb20iLCJpYXQiOjE1OTA5MDU0ODQsImV4cCI6MTU5MDk5MTg4NH0.H2pYtTG48km7-bO_WHkEsO6MpwL5AaZrfsAbxw-d1lJY3LJlyfHuWUFdFzhj58z3bl_nwejL8tYIiV0I7gOqzQ'
  }
});