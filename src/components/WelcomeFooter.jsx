import React from "react";

const WelcomeFooter = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full text-center py-4 ">
      <p>© {new Date().getFullYear()} Sella. All rights reserved.</p>
    </footer>
  );
};

export default WelcomeFooter;
