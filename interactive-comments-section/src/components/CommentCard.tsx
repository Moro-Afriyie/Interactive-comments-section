import * as React from "react";
import { useState } from "react";
import Comment from "./Comment";
import Form from "./Form";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {
  id: number;
  userName: string;
  avatar: string;
  comment: string;
  date: string;
  votes: number;
}

const CommentCard: React.FunctionComponent<ICommentCardProps> = ({
  id,
  userName,
  avatar,
  comment,
  date,
  votes,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");

  return (
    <div className="flex flex-col gap-2 px-3">
      <Comment
        setShowForm={setShowForm}
        setFormType={setFormType}
        id={id}
        userName={userName}
        avatar={avatar}
        date={date}
        votes={votes}
        comment={comment}
      />
      {showForm && formType === "reply" && <Form formType={formType} />}
    </div>
  );
};

export default CommentCard;
