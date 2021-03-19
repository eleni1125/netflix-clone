import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// instance.get("")
// instance.get("/foo-bar");

export default instance;