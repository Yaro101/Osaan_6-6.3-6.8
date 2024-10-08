import { useDispatch } from "react-redux";
import { setFilter } from "../features/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const style = {
    marginBottom: 20,
  };

  return (
    <div style={style}>
      filter: <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
