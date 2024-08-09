import { useEffect, useState } from "react";
import { getTopics } from "../../../api";
import { MenuItem, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Topics = ({ topic, setTopic, sortBy, order }) => {
  const [topics, setTopics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);

  const handleChange = (event) => {
    setTopic(event.target.value);
    if (event.target.value === "") {
      console.log(sortBy, order);
      setSearchParams({ sort_by: sortBy, order });
    } else {
      setSearchParams({ topic: event.target.value, sort_by: sortBy, order });
    }
  };
  return (
    <div className="dropdown-area">
      <Select
        className="dropdown"
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
  );
};

export default Topics;
