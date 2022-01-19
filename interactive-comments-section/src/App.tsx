import React from "react";
import Comment from "./components/Comment";
import Modal from "./components/Modal";
import SendForm from "./components/SendForm";

function App() {
  return (
    <div className="h-screen bg-veryLightGray">
      <Comment />
      <Modal />
      <SendForm />
    </div>
  );
}

export default App;
