import * as React from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyFom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {}

const CommentCard: React.FunctionComponent<ICommentCardProps> = (props) => {
  return (
    <div>
      <Comment />
      {/* <ReplyForm /> */}
    </div>
  );
};

export default CommentCard;
