import axios from 'axios';

export const getWorkouts = () => {
    return axios.get('api/workouts');
};

export const getWorkout = id => {
    return axios.get(`api/workouts/${id}`);
};

export const getUserWorkouts = id => {
    return axios.get(`api/workouts/user/${id}`);
};

export const createWorkout = data => {
    return axios.post('/api/workouts/create', data);
};

export const editWorkout = data => {
    return axios.patch(`/api/workouts/${data._id}`, data);
};
