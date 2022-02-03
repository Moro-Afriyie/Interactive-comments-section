import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment, PeplyComment } from "../interfaces/interface";
import {
  addNewComment,
  addNewReply,
  updateComment,
} from "../store/actions/commentAction";
import { IRootReducerState } from "../store/reducers/rootReducer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFormProps {
  formType: string;
  mainCommentId?: number;
  replyCommentId?: number;
  comment?: string;
  tag: string;
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  setShowUpdateForm?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FunctionComponent<IFormProps> = ({
  formType,
  mainCommentId,
  replyCommentId,
  tag,
  comment,
  setShowForm,
  setShowUpdateForm,
}) => {
  const currentUser = useSelector(
    (state: IRootReducerState) => state.currentUser
  );
  const dispatch = useDispatch();
  const [formComment, setFormComment] = useState(comment);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // check if the form is empty
    if (!formComment) return;
    if (formType === "reply") {
      const reply = {
        mainCommentId: mainCommentId || 0,
        replyCommentId: 4, // give it a new replyId
        userName: currentUser.userName,
        avatar: currentUser.avatar,
        tag: tag,
        reply: formComment || "",
        date: "",
        votes: 0,
      };
      dispatch(addNewReply(reply));
      setShowForm?.(false);
    } else if (formType === "update") {
      if (tag === "reply") {
        dispatch(
          updateComment({
            mainCommentId: mainCommentId || 0,
            replyCommentId: replyCommentId,
            tag: tag,
            comment: formComment || "",
            date: "",
          })
        );
      } else if (tag === "main") {
        dispatch(
          updateComment({
            mainCommentId: mainCommentId || 0,
            tag: tag,
            comment: formComment || "",
            date: "",
          })
        );
      }
      setShowUpdateForm?.(false);
    } else {
      const newComment: Comment = {
        commentId: 3,
        tag: tag,
        userName: currentUser.userName,
        avatar: currentUser.avatar,
        mainComment: formComment || "",
        replies: [],
        date: "",
        votes: 0,
      };
      dispatch(addNewComment(newComment));
      setFormComment("");
    }
  };

  return (
    <form
      className={
        formType === "update"
          ? "bg-white flex flex-col  flex-1 p-3 gap-4 rounded-md  w-full"
          : "bg-white grid grid-cols-3 grid-rows-form  shadow-sm  p-3 gap-4 rounded-md sm:flex "
      }
      onSubmit={handleSubmit}
    >
      {formType !== "update" && (
        <div className="w-10 h-10 rounded-full row-start-2 row-end-3 col-start-1 col-end-2">
          <img
            src={currentUser.avatar}
            alt="profile picture"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <textarea
        className={
          formType === "update"
            ? "h-20 sm:h-24 p-2 border  border-lightGrayish text-grayishBlue rounded-md  focus:border-grayishBlue focus:outline-none"
            : "row-start-1 row-end-2 col-start-1  text-grayishBlue col-end-4 flex-1 h-20 sm:h-24 p-2 border  border-lightGrayish rounded-md  focus:border-grayishBlue focus:outline-none"
        }
        name="comment"
        id="comment"
        placeholder="Add a comment..."
        value={formComment || ""}
        onChange={(e) => setFormComment(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className={
          formType === "update"
            ? "uppercase self-end text-white bg-moderateBlue  py-1 w-24 h-10 rounded-md hover:bg-lightGrayish"
            : "uppercase  justify-self-end text-white bg-moderateBlue  py-1 w-24 h-10 rounded-md col-start-3 col-end-4 hover:bg-lightGrayish"
        }
      >
        {formType}
      </button>
    </form>
  );
};

export default Form;
