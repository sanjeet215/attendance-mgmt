import axios from "axios";
import { authHeader } from './_helper';

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2QxIiwiaWF0IjoxNTkwMjA1ODU5LCJleHAiOjE1OTAyOTIyNTl9.QO7_-ECOCHyokcX2SRytmhyzXdlAli17LctsjhDB_t59f1mFLtHhQ8CkPmD-yDecpTIgRwiAoH76kkucKfMbPw'
  }
});