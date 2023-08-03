// 4f58d80b76msh5e946c81965866dp1e7945jsn07dafc1b7385

import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '4f58d80b76msh5e946c81965866dp1e7945jsn07dafc1b7385' ,
    },
  });
    
  return data;
}