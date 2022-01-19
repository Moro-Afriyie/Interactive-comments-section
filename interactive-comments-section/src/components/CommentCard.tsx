import * as React from "react";
import ReplyForm from "./ReplyFom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {}

const CommentCard: React.FunctionComponent<ICommentCardProps> = (props) => {
  return (
    <div>
      <CommentCard />
      <ReplyForm />
    </div>
  );
};

export default CommentCard;
