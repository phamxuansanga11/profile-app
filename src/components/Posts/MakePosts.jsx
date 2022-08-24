import React from "react";
import { useState } from "react";
import Input from "../inputFiels/Input";
import { useDispatch, useSelector } from "react-redux";
import { createPost, savePost, removeTextFiel } from "../../redux/postSlice";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const MakePosts = ({ setIsOpenPosts, isEditPost }) => {
  const dispath = useDispatch();

  const postUpdate = useSelector((state) => state.post.updatePosts);
  // console.log("post Edit...", postUpdate);

  const tagsArr = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [active, setActive] = useState();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [idPostSave, setIdPostSave] = useState();

  const handlePost = () => {
    setIsOpenPosts(false);
    const newPost = {
      id: uuidv4(),
      title: title,
      decription: desc,
      tag: active,
    };
    dispath(createPost(newPost));
  };

  const handleSave = () => {
    setIsOpenPosts(false);
    const newPostEdit = {
      id: idPostSave,
      title: title,
      decription: desc,
      tag: active,
    };
    const removeText = {
      title: "",
      decription: "",
      tag: "",
    };
    dispath(savePost(newPostEdit));
    dispath(removeTextFiel(removeText));
  };

  useEffect(() => {
    if (postUpdate) {
      setTitle(postUpdate[0]?.title);
      setDesc(postUpdate[0]?.decription);
      setIdPostSave(postUpdate[0]?.id);
    }
  }, [postUpdate]);

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        {isEditPost ? (
          <p className="makepost-save" onClick={handleSave}>
            Save
          </p>
        ) : (
          <p className="makepost-save" onClick={handlePost}>
            POST
          </p>
        )}
      </div>
      <Input
        label="Title"
        value={title}
        placeholder="Add a title"
        inputType="textarea"
        setData={setTitle}
        classStyle="makepost-title"
      />
      <Input
        label="Decription"
        value={desc}
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
              key={uuidv4()}
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
