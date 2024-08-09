import { useEffect, useState } from "react";
import { getArticles } from "../../../api";
import ArticleCard from "./ArticleCard";
import Topics from "../queries/Topics";
import Loading from "../Loading";
import { useLocation } from "react-router-dom";
import SortBy from "../queries/SortBy";
import Order from "../queries/Order";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(false);
  console.log(sortBy, order, "IN ARTICLES");

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams);
    const urlTopic = queryParams.get("topic") || "";
    const urlSortBy = queryParams.get("sort_by") || "created_at";
    const urlOrder = queryParams.get("order") || "desc";
    console.log(urlTopic, urlSortBy, urlOrder);
    setTopic(urlTopic);
    setSortBy(urlSortBy);
    setOrder(urlOrder);

    getArticles(topic, sortBy, order).then((articlesData) => {
      setArticles(articlesData);
    });
    setIsLoading(false);
  }, [topic, sortBy, order]);

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
      <div className="article-queries">
        <Topics
          topic={topic}
          setTopic={setTopic}
          sortBy={sortBy}
          order={order}
        />
        <SortBy
          topic={topic}
          sortBy={sortBy}
          setSortBy={setSortBy}
          order={order}
          setOrder={setOrder}
        />
        <Order
          topic={topic}
          sortBy={sortBy}
          order={order}
          setOrder={setOrder}
        />
      </div>

      <div className="articles-area">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
