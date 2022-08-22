import React from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const tagsArr = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const posts = useSelector((state) => state.post.posts);
  console.log("post ne: ", posts);

  return (
    <section className="post-container">
      {posts.map((post, idx) => {
        return (
          <div className="post" key={idx}>
            <p className="posts-title">{post.title}</p>
            <p className={`posts-tags-${tagsArr[post.tag]} posts-tags`}>
              {tagsArr[post.tag]}
            </p>
            <p className="posts-decription">{post.decription}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Posts;
