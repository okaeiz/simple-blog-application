export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

export const fetchPostById = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to fetch post');
  return response.json();
};

export const fetchCommentsByPostId = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}/comments`);
  if (!response.ok) throw new Error('Failed to fetch comments');
  return response.json();
};