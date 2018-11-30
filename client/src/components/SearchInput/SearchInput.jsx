import React from "react";
import PropTypes from "prop-types";
import "./SearchInput.css";
const SearchInput = ({ onSearchQueryChange, label, value }) => {
  return (
    <div className="animated-search-input">
      <label>
        <input
          type="text"
          value={value}
          required
          onChange={onSearchQueryChange}
        />
        <div className="label-text">
          <i className="fa fa-search" />
          {label}
        </div>
      </label>
    </div>
  );
};
SearchInput.propTypes = {
  onSearchQueryChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
export default SearchInput;
