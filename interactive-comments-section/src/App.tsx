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
  // const [clientWindowHeight, setClientWindowHeight] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [clientWindowHeight]);

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  //   console.log(clientWindowHeight);
  // };

  return (
    <main className="min-h-screen relative items-center bg-veryLightGray flex justify-center pt-3 pb-5 ">
      <div className="max-w-[45rem] min-h-1/2 w-full flex justify-center flex-col gap-5">
        {comments.map((comment) => (
          <div className="w-full" key={comment.commentId}>
            <CommentCard
              mainCommentId={comment.commentId}
              userName={comment.userName}
              tag={comment.tag}
              avatar={comment.avatar}
              comment={comment.mainComment}
              date={comment.date}
              votes={comment.votes}
            />
            {comment.replies.length > 0 && (
              <div className="pt-3">
                <div className="cards-container ml-4 pl-1 sm:ml-12 sm:pl-4 border-l border-lightGrayish flex flex-col gap-3">
                  {comment.replies.map((reply) => (
                    <CommentCard
                      key={reply.replyCommentId}
                      mainCommentId={reply.mainCommentId}
                      replyCommentId={reply.replyCommentId}
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
        <div className="px-3">
          <Form formType="send" tag="main" />
        </div>
      </div>
    </main>
  );
}

export default App;
