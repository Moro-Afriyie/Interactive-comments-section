import * as React from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyFom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {}

const CommentCard: React.FunctionComponent<ICommentCardProps> = (props) => {
  return (
    <div className="flex flex-col gap-2 px-3">
      <Comment />
      <ReplyForm type="reply" />
      <ReplyForm type="update" />
      <ReplyForm type="send" />
    </div>
  );
};

export default CommentCard;
