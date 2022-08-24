import React from "react";

const Alert = () => {
  return (
    <section className="section__alert">
      <i className="icon">
        <img src={require("../../img/icon-warning.png")} alt="" />
      </i>
      <p className="notification">
        Hãy mở devtools và tùy chỉnh về kích thước màn hình mobile để có trải
        nghiệm tốt nhất.
      </p>
    </section>
  );
};

export default Alert;
