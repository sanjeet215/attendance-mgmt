import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW5qZWV0MjE1MkBnbWFpbC5jb20iLCJpYXQiOjE1OTA1OTA4MTUsImV4cCI6MTU5MDY3NzIxNX0.bH3ylwXH8O8Byok_beGUKr-ljWAwYS6Yz6wey6Ox5dsWmIht9saXfQ2-X-A1vY5QFqSqAs0UXJeShCQrFlfNZQ'
  }
});