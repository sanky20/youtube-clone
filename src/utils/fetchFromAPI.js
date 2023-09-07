import axios from "axios";
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": "d2c73b1f71msh6423b2601b68e37p114f56jsnbb297019e0ab",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

 
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};