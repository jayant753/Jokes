import axiosInstance from '../utils/axiosInstance';

export const getFavourites = async () => {
  const response = await axiosInstance.get('/favourites');
  return response.data;
};

export const saveFavourite = async (joke) => {
  const response = await axiosInstance.post('/favourites', joke);
  return response.data;
};
