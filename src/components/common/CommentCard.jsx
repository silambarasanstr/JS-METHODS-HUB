import React from "react";

const CommentCard = ({ data }) => {
  return (
    <div
    className="text-gray-600"
      style={{
        marginLeft: "20px",
        borderLeft: "1px solid gray",
        paddingLeft: "10px",
      }}
    >
      <p>{data.text}</p>

      {/* recursion */}
      {data.replies.map((reply) => (
        <CommentCard key={reply.id} data={reply} />
      ))}
    </div>
  );
};

export default CommentCard;
