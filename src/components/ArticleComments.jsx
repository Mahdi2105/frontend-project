import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../api";
import SingleComment from "./SingleComment";
import Loading from "./Loading";

const ArticleComments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (article_id) {
      setIsLoading(true);
      getCommentsByArticleId(article_id).then((commentsData) => {
        setComments(commentsData);
      });
    }
    setIsLoading(false);
  }, [article_id]);

  if (isLoading) {
    return (
      <div className="main-content">
        <Loading />
      </div>
    );
  }

  return (
    <div className="comments-area">
      <h3>Comments</h3>
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};

export default ArticleComments;
