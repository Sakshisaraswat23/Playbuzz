import axios from 'axios';

const PORT = process.env.PORT || 8080;
// const usersUrl = `http://localhost:${PORT}/api`;

export const getUsers = async id => {
	id = id || '';
	console.log("inside get fun");
	return await axios.get(`/api/${id}`);
};
export const addUser = async (user) => {
    return await axios.post(`/api/add`, user);
}
export const editUser = async (id, user) => {
	return await axios.put(`/api/${id}`, user);
};
