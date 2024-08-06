import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-project-0hto.onrender.com/api/",
});

const getAllArticles = () => {
  return api.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export { getAllArticles, getArticleById, getCommentsByArticleId };
