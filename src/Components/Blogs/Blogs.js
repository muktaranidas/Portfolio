import React from "react";

const Blogs = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      onClick={() =>
        openInNewTab(
          "https://drive.google.com/drive/folders/1hxGW7C6pznDhMNg87w0UsHz0a5dRcSUQ?usp=share_link"
        )
      }
      id="blog"
    >
      <h2 className="text-white text-5xl text-center p-32 font-bold">
        Coming Soon....
      </h2>
    </div>
  );
};

export default Blogs;
