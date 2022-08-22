import React from "react";
import PropTypes from "prop-types";

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function Input({ label, placeholder, inputType, classStyle, setData }) {
  return (
    <>
      <label>{label}:</label>

      {inputType === "textarea" ? (
        <textarea
          placeholder={placeholder}
          className={classStyle}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
}

export default Input;
