import { Card, CardHeader } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div className="article-card">
      <div className="article-card-content">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} />
        <p>Topic: {article.topic}</p>
        <p>Description: {article.body}</p>
        <p>Author: {article.author}</p>
        <p>Created at: {moment(article.created_at).format("LLL")}</p>
      </div>
    </div>
  );
};

export default SingleArticle;
