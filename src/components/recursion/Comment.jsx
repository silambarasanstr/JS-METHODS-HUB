import React from "react";
import CommentCard from "../common/CommentCard";
const comments = [
  {
    id: 1,
    text: "First Comment",
    replies: [
      {
        id: 2,
        text: "Reply 1",
        replies: [
          {
            id: 3,
            text: "Reply 2",
            replies: [
              {
                id: 4,
                text: "Reply to Reply",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = () => {
  return (
    <div className="max-w-md p-6 space-y-3 bg-white shadow-md rounded-2xl">
      <div className="font-bold uppercase text-md">Comment</div>
      <div>
        {comments.map((c) => (
          <CommentCard key={c.id} data={c} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
