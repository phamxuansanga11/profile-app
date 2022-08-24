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
  const [isOpenPosts, setIsOpenPosts] = useState(false);
  const [isEditPost, setIsEditPost] = useState(false);

  return (
    <div className="App">
      <Header setIsEdit={setIsEdit} />
      {isEdit && <Edit setIsEdit={setIsEdit} />}
      {!isEdit && (
        <Footer
          isOpenPosts={isOpenPosts}
          setIsOpenPosts={setIsOpenPosts}
          setIsEditPost={setIsEditPost}
        />
      )}
      {isOpenPosts && (
        <MakePosts setIsOpenPosts={setIsOpenPosts} isEditPost={isEditPost} />
      )}
      {!isOpenPosts && !isEditPost ? (
        <Posts
          setIsOpenPosts={setIsOpenPosts}
          isEditPost={isEditPost}
          setIsEditPost={setIsEditPost}
        />
      ) : (
        !isOpenPosts && (
          <Posts
            setIsOpenPosts={setIsOpenPosts}
            isEditPost={isEditPost}
            setIsEditPost={setIsEditPost}
          />
        )
      )}
      {isShowAlert && <Alert />}
    </div>
  );
}

export default App;
