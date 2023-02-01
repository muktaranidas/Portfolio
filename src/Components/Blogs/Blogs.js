import React from "react";

const Blogs = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <h2 className="text-white text-5xl h-[900px]  text-center p-32 font-bold">
        Coming Soon....
      </h2>
    </div>
  );
};

export default Blogs;
