import React from "react";
import "./App.scss";
import Comment from "./components/comment/Comment";
import Modal from "./components/delete-modal/Modal";
import SendForm from "./components/send-form/SendForm";

function App() {
  return (
    <div className="container">
      <Comment />
      <SendForm />
      <Modal />
    </div>
  );
}

export default App;
