import moment from "moment";

const SingleComment = ({ comment }) => {
  return (
    <div className="single-comment">
      <p>Author: {comment.author}</p>
      <p>Comment: {comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <p>{moment(comment.created_at).format("LLL")}</p>
    </div>
  );
};

export default SingleComment;
