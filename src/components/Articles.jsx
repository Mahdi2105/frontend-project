import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
import Loading from "./Loading";
import { useLocation, useNavigate } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlTopic = queryParams.get("topic") || "";
    setTopic(urlTopic);

    setIsLoading(true);
    getArticles(topic).then((articlesData) => {
      setArticles(articlesData);
    });
    setIsLoading(false);
  }, [topic]);

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
      <Topics topic={topic} setTopic={setTopic} />
      <div className="articles-area">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
