import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md">
      {message}
    </div>
  );
};

export default Toast;
