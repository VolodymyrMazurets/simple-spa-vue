import axios from 'axios';
import { urls, BASE_URL, key } from './urls';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['x-api-key'] = key;

export const fetchBreeds = async () => {
  try {
    const { data } = await axios.get(urls.breeds);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchImages = async () => {
  try {
    const { data } = await axios.get(urls.images);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
