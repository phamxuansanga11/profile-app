import React from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../inputFiels/Input";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlice";
import classNames from "classnames";

Edit.propTypes = {
  setIsHeader: PropTypes.func.isRequired,
};

function Edit({ setIsEdit }) {
  const dispath = useDispatch();
  const themeRef = useRef(null);
  const avatarUrl = [
    "https://tophinhanh.com/wp-content/uploads/2021/12/1_anh-avatar-dep-cho-con-gai.jpg",
    "https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg",
    "https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg",
    "https://upanh123.com/wp-content/uploads/2020/12/tai-anh-anime-ve-lam-avatar10.jpg",
    "https://hinhnen123.com/wp-content/uploads/2021/06/Tong-hop-1001-hinh-anh-dai-dien-dep-cho-nu-duoc-ua-chuong-nhat.jpg",
    "https://thuthuatnhanh.com/wp-content/uploads/2020/09/avatar-nu-cute-anime.jpg",
  ];

  const infomation = useSelector((state) => state.user);

  const [name, setName] = useState(infomation.name);
  const [age, setAge] = useState(infomation.age);
  const [about, setAbout] = useState(infomation.about);
  const [theme, setTheme] = useState(infomation.theme);
  const [url, setUrl] = useState(infomation.avatar);
  const [isActive, setIsActive] = useState();

  const handleSave = (e) => {
    e.preventDefault();
    setIsEdit(false);
    dispath(
      update({
        name,
        age,
        about,
        url,
        theme,
      })
    );
  };

  const handleClickImg = (idx, e) => {
    setUrl(e.target.src);
    setIsActive(idx);
  };

  const handleThemeChange = (e) => {
    if (themeRef.current) {
      clearTimeout(themeRef.current);
    }
    themeRef.current = setTimeout(() => {
      setTheme(e.target.value);
      console.log(e.target.value);
    }, 300);
  };

  return (
    <form>
      <section className="edit-container">
        <button className="close" onClick={handleSave}>
          Save
        </button>
        <div className="edit-profile">Edit profile</div>
        <div className="input-container">
          <Input label="Display Name" placeholder="name..." setData={setName} />
          <Input label="Age" placeholder="age..." setData={setAge} />
          <Input
            inputType="textarea"
            classStyle="input-about"
            label="About"
            placeholder="About me..."
            setData={setAbout}
          />

          <label>Profile Picture:</label>
          <div type="text" className="input-image-container">
            {avatarUrl.map((url, idx) => {
              return (
                <img
                  src={url}
                  key={uuidv4()}
                  alt=""
                  className={classNames({
                    "input-image": true,
                    active: isActive === idx,
                  })}
                  onClick={(e) => handleClickImg(idx, e)}
                />
              );
            })}
          </div>
          <div className="theme-container">
            <label>Theme:</label>
            <input
              type="color"
              className="theme-color"
              onChange={handleThemeChange}
            />
          </div>
        </div>
      </section>
    </form>
  );
}

export default Edit;
