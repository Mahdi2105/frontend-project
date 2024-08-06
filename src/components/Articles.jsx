import { useEffect, useState } from "react";
import { getAllArticles } from "../../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesData) => {
      setArticles(articlesData);
    });
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      <div className="articles-area">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
