import { MenuItem, Select } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Order = ({ topic, sortBy, setOrder, order }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setOrder(event.target.value);
    if (topic === "") {
      setSearchParams({ sort_by: sortBy, order: event.target.value });
    } else {
      setSearchParams({
        topic: topic,
        sort_by: sortBy,
        order: event.target.value,
      });
    }
  };

  return (
    <div className="dropdown-area">
      <Select
        className="dropdown"
        value={order}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value="desc">Descending</MenuItem>
        <MenuItem value="asc">Ascending</MenuItem>
      </Select>
    </div>
  );
};

export default Order;
