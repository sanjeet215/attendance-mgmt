import axios from "axios";
import { authHeader } from './_helper';

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2QxIiwiaWF0IjoxNTg5OTk2Mzk5LCJleHAiOjE1OTAwODI3OTl9.YhjdOdbiaoox8FYppUVxAn1UvnjyamP9Ia46Mhlj5BvOF5DEpGqAYLsY0JT_0qth3qNi1AtjXD7zFIKNgLZzxg'
  }
});