import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className="article-card">
      <div className="article-card-content">
        <h2>{article.title}</h2>
        <img src={article.article_img_url} />
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
