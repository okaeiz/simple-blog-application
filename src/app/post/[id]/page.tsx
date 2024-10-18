"use client";

import { useQuery } from "react-query";
import { fetchPostDetails, fetchComments } from "../../services/posts";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch the post details
  const {
    data: post,
    error: postError,
    isLoading: isPostLoading,
  } = useQuery<Post>(["postDetails", id], () => fetchPostDetails(id), {
    enabled: !!id,
  });

  // Fetch comments for the post
  const {
    data: comments,
    error: commentsError,
    isLoading: isCommentsLoading,
  } = useQuery<Comment[]>(["comments", id], () => fetchComments(id), {
    enabled: !!id,
  });

  if (isPostLoading || isCommentsLoading) {
    return <div className="text-center text-xl py-10">Loading...</div>;
  }

  if (postError || commentsError) {
    return (
      <div className="text-center text-red-500 text-xl py-10">
        Error loading post or comments.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        {post && (
          <div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-700 mb-4">{post.body}</p>
          </div>
        )}
      </div>

      {/* Comments Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          {comments && comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">{comment.name}</h3>
                <p className="text-sm text-gray-500">{comment.email}</p>
                <p className="text-gray-700">{comment.body}</p>
              </div>
            ))
          ) : (
            <p>No comments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
