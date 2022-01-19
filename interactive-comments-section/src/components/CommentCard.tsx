import * as React from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyFom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {}

const CommentCard: React.FunctionComponent<ICommentCardProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <Comment />
      <ReplyForm />
    </div>
  );
};

export default CommentCard;
