import { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Edit from "./components/edit/Edit";
import Footer from "./components/footer/Footer";
import MakePosts from "./components/Posts/MakePosts";
import Posts from "./components/Posts/Posts";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenPosts, setIsOpenPosts] = useState(false);
  return (
    <div className="App">
      <Header setIsEdit={setIsEdit} />
      {isEdit && <Edit setIsEdit={setIsEdit} />}
      {!isEdit && (
        <Footer isOpenPosts={isOpenPosts} setIsOpenPosts={setIsOpenPosts} />
      )}
      {isOpenPosts && <MakePosts setIsOpenPosts={setIsOpenPosts} />}
      {!isOpenPosts && <Posts />}
    </div>
  );
}

export default App;
