import React from "react";
import CommentCard from "./components/CommentCard";
import SendForm from "./components/SendForm";

function App() {
  return (
    <div className="min-h-screen bg-veryLightGray flex flex-col items-center gap-3 py-5">
      <div className="comment max-w-3xl">
        <CommentCard />
        <div className="sub-comments py-3">
          <div className="cards-container ml-4 sm:ml-9 pl-4 border-l border-lightGrayish flex flex-col gap-3">
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </div>
      <div className="comment max-w-3xl">
        <CommentCard />
        <div className="sub-comments py-3">
          <div className="cards-container ml-9 pl-4 border-l border-lightGrayish flex flex-col gap-3">
            <CommentCard />
            <CommentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
