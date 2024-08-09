import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./components/articles/Articles";
import SingleArticle from "./components/articles/SingleArticle";
import Users from "./components/users/Users";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/errors/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="*"
          element={<NotFound errMsg={"Sorry This Page Does Not Exist"} />}
        />
      </Routes>
    </>
  );
}

export default App;
