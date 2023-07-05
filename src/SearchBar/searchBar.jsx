import { useState } from "react";
import "./searchBar.css";
import { BsSearch } from "react-icons/bs";
const SearchBar = ({ searchItem }) => {
  const [value, setValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    searchItem(value);
  };
  return (
    <form
      onSubmit={submit}
      className="search flex-fill d-flex align-items-center"
    >
      <div className="input-group">
        <input
          className="form-control rounded-end pe-5 border-success"
          type="text"
          placeholder="جستجو فست فود ..."
          value = { value }
          onChange={(event) => {
            setValue(event.target.value);
           
          }}
        />
        <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3 " />
      </div>
    </form>
  );
};

export default SearchBar;
