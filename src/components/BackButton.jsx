

// 

import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-0 z-30 left-4 cursor-pointer flex items-center gap-1 text-[var(--accent)] font-semibold hover:underline"
    >
      <ChevronLeftIcon className="w-5 h-5" />
      Back
    </button>
  );
};

export default BackButton;
