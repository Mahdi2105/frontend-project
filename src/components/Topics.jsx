import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Topics = ({ topic, setTopic }) => {
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);

  const handleChange = (event) => {
    setTopic(event.target.value);
    if (event.target.value === "") {
      navigate(`/articles`, { replace: true });
    } else {
      navigate(`/articles?topic=${event.target.value}`, { replace: true });
    }
  };
  return (
    <>
      <div className="topic-dropdown-area">
        <Select
          className="topic-dropdown"
          value={topic}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem key="all-topics" value="">
            All topics
          </MenuItem>
          {topics.map((topic) => {
            return (
              <MenuItem key={topic.slug} value={`${topic.slug}`}>
                {topic.slug}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    </>
  );
};

export default Topics;
