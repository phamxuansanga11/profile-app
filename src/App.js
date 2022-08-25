import { useState, useRef, useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Edit from "./components/edit/Edit";
import Footer from "./components/footer/Footer";
import MakePosts from "./components/Posts/MakePosts";
import Posts from "./components/Posts/Posts";
import Alert from "./components/alert/Alert";

function App() {
  //clear and setTimeOut
  const setTimeOutRef = useRef(null);
  const handleShowAlert = () => {
    if (setTimeOutRef.current) {
      clearTimeout(setTimeOutRef.current);
    }
    setTimeOutRef.current = setTimeout(() => {
      setIsShowAlert(false);
    }, 8000);
  };

  useEffect(() => {
    handleShowAlert();
  }, []);

  const [isShowAlert, setIsShowAlert] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPosts, setIsOpenPosts] = useState(true);
  const [isEditPost, setIsEditPost] = useState(false);

  return (
    <div className="App">
      {}

      {isEdit && <Edit setIsEdit={setIsEdit} />}
      {!isEdit && !isEditPost && isOpenPosts ? (
        <>
          <Header setIsEdit={setIsEdit} />
          <Posts
            setIsOpenPosts={setIsOpenPosts}
            isEditPost={isEditPost}
            setIsEditPost={setIsEditPost}
          />
          <Footer
            isOpenPosts={isOpenPosts}
            setIsOpenPosts={setIsOpenPosts}
            setIsEditPost={setIsEditPost}
          />
        </>
      ) : !isEdit && !isOpenPosts ? (
        <>
          <Header setIsEdit={setIsEdit} />
          <MakePosts setIsOpenPosts={setIsOpenPosts} isEditPost={isEditPost} />
          <Footer
            isOpenPosts={isOpenPosts}
            setIsOpenPosts={setIsOpenPosts}
            setIsEditPost={setIsEditPost}
          />
        </>
      ) : isOpenPosts && !isEdit ? (
        <>
          <Header setIsEdit={setIsEdit} />
          <Posts
            setIsOpenPosts={setIsOpenPosts}
            isEditPost={isEditPost}
            setIsEditPost={setIsEditPost}
          />
          <Footer
            isOpenPosts={isOpenPosts}
            setIsOpenPosts={setIsOpenPosts}
            setIsEditPost={setIsEditPost}
          />
        </>
      ) : (
        ""
      )}
      {isShowAlert && <Alert />}
    </div>
  );
}

export default App;
