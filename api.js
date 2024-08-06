import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-project-0hto.onrender.com/api/",
});

const getAllArticles = () => {
  return api.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

const getArticleById = (id) => {
  return api.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export { getAllArticles, getArticleById };
