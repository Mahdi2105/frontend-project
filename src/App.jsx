import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import SingleArticle from "./components/SingleArticle";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
