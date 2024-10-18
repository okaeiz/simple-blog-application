// services/posts.ts

import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/posts`);
  return data.slice(0, 10); // Limit to 10 posts
};

export const fetchPostDetails = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
  return data;
};

export const fetchComments = async (postId: string) => {
  const { data } = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
  return data;
};
