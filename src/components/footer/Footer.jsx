import React from "react";

const Footer = ({ isOpenPosts, setIsOpenPosts, setIsEditPost }) => {
  const handleClickFooter = () => {
    setIsEditPost(false);
    setIsOpenPosts(!isOpenPosts);
  };

  return (
    <footer>
      <div className="footer-title" onClick={handleClickFooter}>
        {!isOpenPosts ? (
          <span className="btn__close">close</span>
        ) : (
          <span className="btn__add">+ add new post</span>
        )}
      </div>
    </footer>
  );
};

export default Footer;
