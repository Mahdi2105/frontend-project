import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { deleteCommentById } from "../../api";

const SingleComment = ({ comment, setComments }) => {
  const { user } = useContext(UserContext);
  const [isHandlingRequest, setIsHandlingRequest] = useState(false);

  const handleDelete = () => {
    setIsHandlingRequest(true);
    deleteCommentById(comment.comment_id)
      .catch((error) => {
        console.error("An error has occurred:", error);
      })
      .then(() => {
        setComments((prevComments) => {
          return prevComments.filter(
            (prevComment) => prevComment.comment_id !== comment.comment_id
          );
        });
        setIsHandlingRequest(false);
      });
  };

  return (
    <div className="single-comment">
      <p>Author: {comment.author}</p>
      <p>Comment: {comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <div className="comment-last-row">
        <p>{moment(comment.created_at).format("LLL")}</p>
        {user.username === comment.author && (
          <FontAwesomeIcon
            icon={faTrash}
            className="trash-icon"
            size="xl"
            style={{
              cursor: isHandlingRequest ? "not-allowed" : "pointer",
              color: isHandlingRequest ? "grey" : "black",
            }}
            onClick={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default SingleComment;
