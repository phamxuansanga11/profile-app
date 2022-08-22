import React from "react";
import { useSelector } from "react-redux";

function Header({ setIsEdit }) {
  const userInfo = useSelector((state) => state.user);

  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <header
      style={{
        backgroundColor: `${userInfo.theme}`,
        backgroundImage: `linear-gradient(180deg,${userInfo.theme} 2%, ${userInfo.theme}, 65%, #181818 100%)`,
      }}
    >
      <div className="info-container">
        <div className="info-edit" onClick={handleEdit}>
          Edit
        </div>
        <img className="info-ava" src={userInfo.avatar} alt="avatar" />
        <div className="info-username">{userInfo.name}</div>
        <div className="info-age">{userInfo.age} year old</div>
        <div className="info-about">{userInfo.about}</div>
      </div>
    </header>
  );
}

export default Header;
