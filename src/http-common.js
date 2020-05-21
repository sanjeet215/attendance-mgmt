import axios from "axios";
import { authHeader } from './_helper';

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2QxIiwiaWF0IjoxNTkwMDgxMDg0LCJleHAiOjE1OTAxNjc0ODR9.50wF5a_RdASIwf1bck3ENWk_bPGbeCwqIMPD1zcO5H3ioObszN2VCUUfKD_41Jm3B-jvQGRy75sKN8cIQ_2Urg'
  }
});