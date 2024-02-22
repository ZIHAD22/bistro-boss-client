import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "development") {
  baseURL = import.meta.env.VITE_DEVELOPMENT_BASEURL;
} else {
  baseURL = import.meta.env.VITE_PRODUCTION_BASEURL;
}

console.log(baseURL);

const client = axios.create({
  baseURL,
});

export default client;
