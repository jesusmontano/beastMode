import axios from 'axios';

export const getAllExercises = () => {
  return axios.get('/api/exercises')
};

export const getExerciseByBodyPart = (body_part) => {
  return axios.get(`/api/exercises/${body_part}`);
};