import { MenuItem, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Topics = ({ topic, topics, setTopic, sortBy, order }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setTopic(event.target.value);
    if (event.target.value === "") {
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
