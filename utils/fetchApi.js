import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

/*
headers: {
  'X-RapidAPI-Key': '8136cf385amsh495f3c696ca7119p1198c4jsn8b67ffce71f4',
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
}
*/

const NEXT_PUBLIC_RAPID_API_KEY =
  '8136cf385amsh495f3c696ca7119p1198c4jsn8b67ffce71f4';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': NEXT_PUBLIC_RAPID_API_KEY,
      // 'x-rapidapi-host': 'bayut.p.rapidapi.com',
      // 'x-rapidapi-key': '8136cf385amsh495f3c696ca7119p1198c4jsn8b67ffce71f4',
    },
  });
  return data;
};
