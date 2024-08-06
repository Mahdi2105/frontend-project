import { useEffect, useState } from "react";
import { getAllArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles().then((articlesData) => {
      setArticles(articlesData);
      console.log(articles);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="main-content">
        <Loading />
      </div>
    );
  }

  return (
    <div className="main-content">
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
