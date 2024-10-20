// components/CommentList.tsx

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="space-y-4">
      {comments.length > 0 ? (
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
  );
};

export default CommentList;
