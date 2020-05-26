import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5qZWV0MjE1MkBnbWFpbC5jb20iLCJpYXQiOjE1OTA1MDQwODMsImV4cCI6MTU5MDU5MDQ4M30.M5aZeMTpg5C-7qwn08XuPWJiz8awuuZYkPgKXKvQfXGmBpEaOWnqziYdyIqKmJLq-M169aTMiU0buM_nnooWkg'
  }
});