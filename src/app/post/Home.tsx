"use client";

import Link from "next/link";
import { useQuery } from "react-query";
import { fetchPosts } from "../services/posts";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const { data, error, isLoading } = useQuery<Post[]>("posts", fetchPosts);

  if (isLoading)
    return <div className="text-center text-xl py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 text-xl py-10">
        Error loading posts.
      </div>
    );

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.slice(0, 10).map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">
              <Link
                href={`/post/${post.id}`}
                className="hover:underline text-blue-600"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700">{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
