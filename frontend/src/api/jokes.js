import axiosInstance from '../utils/axiosInstance';

export const fetchJokes = async (searchTerm) => {
  const response = await axiosInstance.get(`/jokes/search`, { params: { term: searchTerm } });
  return response.data;
};
