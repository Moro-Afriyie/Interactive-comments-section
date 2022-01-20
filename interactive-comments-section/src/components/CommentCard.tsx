import * as React from "react";
import { useState } from "react";
import Comment from "./Comment";
import Form from "./Form";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {}

const CommentCard: React.FunctionComponent<ICommentCardProps> = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");

  return (
    <div className="flex flex-col gap-2 px-3">
      <Comment setShowForm={setShowForm} setFormType={setFormType} />
      {showForm && formType === "reply" && <Form formType={formType} />}
    </div>
  );
};

export default CommentCard;
