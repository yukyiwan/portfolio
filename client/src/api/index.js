import axios from 'axios';

const url = 'https://cora-portfolio.herokuapp.com';

export const fetchPosts = ()=> axios.get(`${url}/posts`);
export const createPost = (newPost)=> axios.post(`${url}/posts`,newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);

export const signIn = (formData) => axios.post(`${url}/user/signin`, formData);
export const signUp = (formData) => axios.post(`${url}/user/signup`, formData);