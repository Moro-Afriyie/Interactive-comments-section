import * as React from "react";
import { useState } from "react";
import Comment from "./Comment";
import ReplyForm from "./ReplyFom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {}

const CommentCard: React.FunctionComponent<ICommentCardProps> = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");

  return (
    <div className="flex flex-col gap-2 px-3">
      <Comment setShowForm={setShowForm} setFormType={setFormType} />
      {showForm && formType === "reply" && <ReplyForm formType={formType} />}
      {showForm && formType === "update" && <ReplyForm formType={formType} />}
      {/* <ReplyForm formType={formType} /> */}
    </div>
  );
};

export default CommentCard;
