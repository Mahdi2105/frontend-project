import { useEffect, useState } from "react";
import { getArticles, getTopics } from "../../../api";
import ArticleCard from "./ArticleCard";
import Topics from "../queries/Topics";
import Loading from "../Loading";
import { useLocation } from "react-router-dom";
import SortBy from "../queries/SortBy";
import Order from "../queries/Order";
import NotFound from "../errors/NotFound";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlTopic = queryParams.get("topic") || "";
  const urlSortBy = queryParams.get("sort_by") || "created_at";
  const urlOrder = queryParams.get("order") || "desc";

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
      const isValidTopic = topicsData.some((topic) => topic.slug === urlTopic);
      console.log(urlTopic);

      if (!isValidTopic && urlTopic !== "") setError(true);
      else setError(false);
    });
  }, [urlTopic, topic]);

  useEffect(() => {
    setIsLoading(true);
    setTopic(urlTopic);
    setSortBy(urlSortBy);
    setOrder(urlOrder);

    getTopics().then((topicsData) => {
      setTopics(topicsData);
      const isValidTopic = topicsData.some((topic) => topic.slug === urlTopic);
      console.log(urlTopic);

      if (!isValidTopic && urlTopic !== "") setError(true);
    });

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
      {error ? (
        <NotFound errMsg={"Sorry This Topic does Not Exist"} />
      ) : (
        <div>
          <h2>Articles</h2>
          <div className="article-queries">
            <Topics
              topic={topic}
              topics={topics}
              setTopic={setTopic}
              sortBy={sortBy}
              order={order}
              urlTopic={urlTopic}
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
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Articles;
