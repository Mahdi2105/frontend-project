import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-project-0hto.onrender.com/api/",
});

const getArticles = (topic, sortBy, order) => {
  const query = {
    params: {
      topic: topic,
      sort_by: sortBy,
      order: order,
    },
  };
  return api.get(`/articles`, query).then(({ data }) => {
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

const updateArticleVotes = (article_id, vote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {});
};

const getUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data.users;
  });
};

const getTopics = () => {
  return api.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

const postCommentByArticleId = (article_id, commentObj) => {
  return api
    .post(`/articles/${article_id}/comments`, commentObj)
    .then(({ data }) => {
      return data;
    });
};

const deleteCommentById = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((data) => {
    console.log(data);
    return data;
  });
};

export {
  getArticles,
  getArticleById,
  getCommentsByArticleId,
  getUsers,
  updateArticleVotes,
  postCommentByArticleId,
  deleteCommentById,
  getTopics,
};
