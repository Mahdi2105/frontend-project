import { TextField } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { postCommentByArticleId } from "../../api";

const NewComment = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");

  function onSubmitComment(event) {
    event.preventDefault();
    if (!user.username) {
      alert("Please Login to post a comment");
    } else {
      const commentObj = {
        body: commentBody,
        username: user.username,
      };

      postCommentByArticleId(article_id, commentObj).then((result) => {
        setComments((prevComments) => {
          return [result.comment, ...prevComments];
        });
        setCommentBody("");
      });
    }
  }

  const handleInputChange = (event) => {
    setCommentBody(event.target.value);
  };
  return (
    <div className="new-comment-area">
      <h3>Add Comment</h3>

      <div className="comment-form">
        <form onSubmit={onSubmitComment}>
          <div className="form-contents">
            <TextField
              id="comment-input"
              label="Comment"
              multiline
              rows={4}
              value={commentBody}
              onChange={handleInputChange}
              required
            />
            <button className="comment-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewComment;
