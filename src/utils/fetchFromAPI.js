import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    // url: BASE_URL,
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // export const fetchFromAPI = async (url) => {
  //   const {data} = await axios.get('https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=UCmXmlB4-HJytD7wek0Uo97A', options);
  //   console.log(data?.items[0])
  //   // return data;
  // }

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(data)
    return data;
  }
  