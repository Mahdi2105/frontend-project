import { Card, CardHeader } from "@mui/material";

const ArticleCard = ({ article }) => {
  return (
    <Card className="article-card">
      <CardHeader title={article.title} />
      <img src={article.article_img_url} />
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
    </Card>
  );
};

export default ArticleCard;
