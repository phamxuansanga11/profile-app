import React from "react";

const Footer = ({ isOpenPosts, setIsOpenPosts }) => {
  return (
    <footer>
      <div
        className="footer-title"
        onClick={() => setIsOpenPosts(!isOpenPosts)}
      >
        {isOpenPosts ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
