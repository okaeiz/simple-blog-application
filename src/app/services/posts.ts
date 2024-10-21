import axios from "axios";
import { Post, User } from "../interfaces/Post.interface";
import { Comment } from "../interfaces/Comment.interface";

const BASE_URL = "https://jsonplaceholder.typicode.com";

type UserMap = Record<number, string>;

export const fetchPosts = async (): Promise<Post[]> => {
  const { data: posts } = await axios.get<Post[]>(`${BASE_URL}/posts`);
  const { data: users } = await axios.get<User[]>(`${BASE_URL}/users`);

  const userMap: UserMap = {};
  users.forEach((user) => {
    userMap[user.id] = user.name;
  });

  const postsWithUserNames = posts.slice(0, 10).map((post) => ({
    ...post,
    userName: userMap[post.userId],
  }));

  return postsWithUserNames;
};

export const fetchPostDetails = async (id: string): Promise<Post> => {
  const { data } = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
  return data;
};

export const fetchComments = async (postId: string): Promise<Comment[]> => {
  const response = await axios.get<Comment[]>(
    `${BASE_URL}/posts/${postId}/comments`
  );
  return response.data;
};
