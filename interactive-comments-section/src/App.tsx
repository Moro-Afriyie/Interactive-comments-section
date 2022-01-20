import React from "react";
import CommentCard from "./components/CommentCard";
import Form from "./components/Form";

function App() {
  return (
    <main className="min-h-screen bg-veryLightGray flex flex-col items-center gap-3 py-5">
      <div className="max-w-3xl">
        <div className="max-w-3xl">
          <CommentCard />
          <div className="py-3">
            <div className="cards-container ml-4 pl-1 sm:ml-9 sm:pl-4 border-l border-lightGrayish flex flex-col gap-3">
              <CommentCard />
              <CommentCard />
            </div>
          </div>
        </div>
        <div className="px-3">
          <Form formType="send" />
        </div>
      </div>
    </main>
  );
}

export default App;
