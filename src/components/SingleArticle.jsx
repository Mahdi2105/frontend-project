import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, updateArticleVotes } from "../../api";
import ArticleComments from "./ArticleComments";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownVoted] = useState(false);
  const { user } = useContext(UserContext);
  const { article_id } = useParams();

  console.log(upvoted, "UPVOTED");
  console.log(downvoted, "DOWNVOTED");

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  function addVote() {
    setArticle((currArticle) => ({
      ...currArticle,
      votes: currArticle.votes + 1,
    }));
  }

  function removeVote() {
    setArticle((currArticle) => ({
      ...currArticle,
      votes: currArticle.votes - 1,
    }));
  }

  function updateArticleAddVote(vote) {
    updateArticleVotes(article_id, 1).catch((err) => {
      setArticle((currArticle) => ({
        ...currArticle,
        votes: currArticle.votes - 1,
      }));
      console.error("An error has occured:", err);
    });
  }

  function updateArticleRemoveVote() {
    updateArticleVotes(article_id, -1).catch((err) => {
      setArticle((currArticle) => ({
        ...currArticle,
        votes: currArticle.votes + 1,
      }));
      console.error("An error has occured:", err);
    });
  }

  const handleVote = (type) => {
    if (user.username) {
      if (type === "upvote" && !downvoted) {
        if (!upvoted) {
          addVote();
          updateArticleAddVote();
          setUpvoted(true);
        } else if (upvoted) {
          removeVote();
          updateArticleRemoveVote();
          setUpvoted(false);
        }
      } else if (type === "upvote" && downvoted) {
        addVote();
        updateArticleAddVote();
        addVote();
        updateArticleAddVote();
        setUpvoted(true);
        setDownVoted(false);
      } else if (type === "downvote" && !upvoted) {
        if (!downvoted) {
          removeVote();
          updateArticleRemoveVote();
          setDownVoted(true);
        } else if (downvoted) {
          addVote();
          updateArticleAddVote();
          setDownVoted(false);
        }
      } else if (type === "downvote" && upvoted) {
        removeVote();
        updateArticleRemoveVote();
        removeVote();
        updateArticleRemoveVote();
        setDownVoted(true);
        setUpvoted(false);
      }

      console.log(user);
    } else {
      alert("Please login to vote");
    }
  };

  return (
    <div className="main-content">
      <div className="article-card">
        <div className="article-card-content">
          <h2>{article.title}</h2>
          <img src={article.article_img_url} />
          <p>Description: {article.body}</p>
        </div>
        <div className="single-article-bottom">
          <p className="single-article-bottom-item">Topic: {article.topic}</p>

          <p className="single-article-bottom-item">Author: {article.author}</p>
          <p className="single-article-bottom-item">
            Created at: {moment(article.created_at).format("LLL")}
          </p>
          <button
            className={`downvote-btn ${downvoted ? "active" : ""}`}
            onClick={() => handleVote("downvote")}
          >
            Downvote
          </button>
          <p className="single-article-bottom-item">Votes: {article.votes}</p>
          <button
            className={`upvote-btn ${upvoted ? "active" : ""}`}
            onClick={() => handleVote("upvote")}
          >
            Upvote
          </button>
        </div>
      </div>
      <ArticleComments article_id={article.article_id} />
    </div>
  );
};

export default SingleArticle;
