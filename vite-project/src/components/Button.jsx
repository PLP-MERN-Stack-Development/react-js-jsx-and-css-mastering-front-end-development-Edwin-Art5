// src/components/Button.jsx
import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, variant = "primary" }) => {
  const base =
    "px-4 py-2 rounded-md font-medium focus:outline-none transition-colors";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "danger"]),
};

export default Button;
