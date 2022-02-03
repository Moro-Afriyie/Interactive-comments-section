import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../store/actions/commentAction";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalProps {
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  tag: string;
  mainCommentId: string;
  replyCommentId?: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({
  setShowDeleteModal,
  tag,
  mainCommentId,
  replyCommentId,
}) => {
  const dispatch = useDispatch();

  const DeleteComment = () => {
    if (tag === "main") {
      dispatch(
        deleteComment({
          tag,
          mainCommentId,
        })
      );
    } else {
      dispatch(
        deleteComment({
          tag,
          mainCommentId,
          replyCommentId,
        })
      );
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="fixed w-full h-full top-0 left-0  inset-0 flex items-center justify-center bg-darkBlue bg-opacity-30">
      <div className="max-w-xs w-full mx-3 sm:mx-auto  p-6 bg-white flex flex-col gap-3 rounded-md">
        <p className="font-medium text-lg text-darkBlue">Delete comment</p>
        <p className="mb-4 text-sm text-grayishBlue">
          Are you sure you want to remove this comment? This will remove the
          comment and can&apos;t be undone.
        </p>
        <div className="flex gap-2">
          <button
            className=" flex-1 px-2 sm:px-4 py-2 text-white text-sm bg-darkBlue rounded-md uppercase"
            onClick={() => setShowDeleteModal(false)}
          >
            no, cancel
          </button>
          <button
            className=" flex-1 px-2 sm:px-4 py-2 text-sm text-white  bg-softRed rounded-md uppercase"
            onClick={DeleteComment}
          >
            yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
