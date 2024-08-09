import { MenuItem, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const SortBy = ({ topic, sortBy, setSortBy, order }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSortBy(event.target.value);
    if (topic === "") {
      setSearchParams({ sort_by: event.target.value, order });
    } else {
      setSearchParams({ topic: topic, sort_by: event.target.value, order });
    }
  };

  return (
    <div className="dropdown-area">
      <Select
        className="dropdown"
        value={sortBy}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="author">Author</MenuItem>
        <MenuItem value="votes">Votes</MenuItem>
        <MenuItem value="created_at">Date</MenuItem>
        <MenuItem value="comment_count">Comment Count</MenuItem>
      </Select>
    </div>
  );
};

export default SortBy;
