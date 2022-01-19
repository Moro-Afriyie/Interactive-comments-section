import React from "react";
import Comment from "./components/Comment";
import CommentCard from "./components/CommentCard";
import Modal from "./components/Modal";
import SendForm from "./components/SendForm";

function App() {
  return (
    <div className="h-screen bg-veryLightGray">
      <CommentCard />
    </div>
  );
}

export default App;
