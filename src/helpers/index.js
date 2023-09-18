import axios from "axios";
import { options } from "../contants";

axios.defaults.baseURL = "https://youtube138.p.rapidapi.com";
export const getData = async (url) => {
  const res = await axios.get(url, options);

  return res.data;
};
