import React from "react";
import CommentCard from "./components/CommentCard";
import Form from "./components/Form";
import { Comment } from "./interfaces/interface";
import { useSelector } from "react-redux";
import { IRootReducerState } from "./store/reducers/rootReducer";

function App() {
  const comments: Comment[] = useSelector(
    (state: IRootReducerState) => state.comments.comments
  );

  return (
    <main className="min-h-screen relative items-center bg-veryLightGray flex justify-center pt-3 pb-5 ">
      <div className="max-w-3xl min-h-1/2 w-full flex flex-col">
        {comments.map((comment) => (
          <div className="w-full py-2 flex-grow" key={comment.commentId}>
            <CommentCard
              id={comment.commentId}
              userName={comment.userName}
              tag={comment.tag}
              avatar={comment.avatar}
              comment={comment.mainComment}
              date={comment.date}
              votes={comment.votes}
            />
            {comment.replies.length > 0 && (
              <div className="py-3">
                <div className="cards-container ml-4 pl-1 sm:ml-9 sm:pl-4 border-l border-lightGrayish flex flex-col gap-3">
                  {comment.replies.map((reply) => (
                    <CommentCard
                      key={reply.Id}
                      id={reply.Id}
                      userName={reply.userName}
                      tag={reply.tag}
                      avatar={reply.avatar}
                      comment={reply.reply}
                      date={reply.date}
                      votes={reply.votes}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="px-3 mt-auto">
          <Form formType="send" />
        </div>
      </div>
    </main>
  );
}

export default App;
