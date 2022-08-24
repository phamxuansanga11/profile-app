import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../../redux/postSlice";

const Posts = ({ setIsOpenPosts, setIsEditPost }) => {
  const tagsArr = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const posts = useSelector((state) => state.post.posts);

  // console.log("post ne: ", posts);
  const dispath = useDispatch();

  const handleDelete = (id) => {
    dispath(deletePost(id));
  };

  const handleEdit = (id) => {
    setIsEditPost(true);
    setIsOpenPosts(true);
    dispath(updatePost(id));
  };

  return (
    <section className="post-container">
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <p className="posts-title">{post.title}</p>
            <p className={`posts-tags-${tagsArr[post.tag]} posts-tags`}>
              {tagsArr[post.tag]}
            </p>
            <p className="posts-decription">{post.decription}</p>
            <div className="wrapper__btn">
              <p className="posts-delete" onClick={() => handleDelete(post.id)}>
                delete
              </p>
              <p className="posts-editpost" onClick={() => handleEdit(post.id)}>
                edit
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Posts;
