import React from "react";
import { useState } from "react";
import Input from "../inputFiels/Input";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";

const MakePosts = ({ setIsOpenPosts }) => {
  const dispath = useDispatch();

  const tagsArr = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [active, setActive] = useState();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handlePost = () => {
    setIsOpenPosts(false);
    const newPost = {
      title: title,
      decription: desc,
      tag: active,
    };
    console.log("data", newPost);
    dispath(createPost(newPost));
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          POST
        </p>
      </div>
      <Input
        label="Title"
        placeholder="Add a title"
        inputType="textarea"
        setData={setTitle}
        classStyle="makepost-title"
      />
      <Input
        label="Decription"
        placeholder="Add decription"
        inputType="textarea"
        setData={setDesc}
        classStyle="makepost-title"
      />
      <label>Tags:</label>
      <div className="makepost-tags">
        {tagsArr.map((tag, idx) => {
          return (
            <button
              key={idx}
              className={
                active === idx
                  ? "makepost-tags-selected"
                  : `makepost-tags-${tag}`
              }
              onClick={() => setActive(idx)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePosts;
