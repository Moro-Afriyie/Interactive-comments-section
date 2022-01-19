import React from "react";
import Comment from "./components/Comment";
import Modal from "./components/Modal";
import SendForm from "./components/SendForm";
// import "./App.scss";

function App() {
  return (
    <div>
      <Comment />
      <Modal />
      <SendForm />
    </div>
  );
}

export default App;
