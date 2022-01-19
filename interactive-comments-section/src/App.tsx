import React from "react";
import CommentCard from "./components/CommentCard";
import SendForm from "./components/SendForm";

function App() {
  return (
    <div className="min-h-screen bg-veryLightGray flex flex-col items-center gap-3 py-5">
      <CommentCard />
      <CommentCard />
      <CommentCard />
      {/* <CommentCard />
      <CommentCard /> */}
    </div>
  );
}

export default App;
