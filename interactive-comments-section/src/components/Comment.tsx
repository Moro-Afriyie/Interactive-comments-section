import * as React from "react";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";
import edit from "../assets/icon-edit.svg";
import deleteIcon from "../assets/icon-delete.svg";
import Form from "./Form";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { IRootReducerState } from "../store/reducers/rootReducer";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
  id: number;
  userName: string;
  avatar: string;
  comment: string;
  date: string;
  votes: number;
}

const Comment: React.FunctionComponent<ICommentProps> = ({
  setShowForm,
  setFormType,
  id,
  userName,
  avatar,
  comment,
  date,
  votes,
}) => {
  const handleFormDisplay = (showForm: boolean, formType: string) => {
    setShowForm(showForm);
    setFormType(formType);
  };

  const [showUpdateForm, setShowUpdateForm] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const currentUser = useSelector(
    (state: IRootReducerState) => state.currentUser
  );

  return (
    <div>
      <div className="bg-white  shadow-sm p-3 grid gap-4 rounded-md sm:flex w-full font-rubik">
        {/*Vote button on desktop**/}
        <div className="sm:flex hidden py-2 px-2 max-h-20 flex-row items-center gap-3 bg-veryLightGray rounded-md w-fit sm:flex-col">
          <img src={plus} alt="plus icon" className="cursor-pointer" />
          <p className="text-moderateBlue text-sm font-bold">{votes}</p>
          <img src={minus} alt="minus icon" className="cursor-pointer" />
        </div>
        {/*end vote button on desktop**/}
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="w-10 h-10 rounded-full">
              <img
                src={avatar}
                alt="profile picture"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-darkBlue font-bold lowercase">{userName}</p>

            {currentUser.userName === userName && (
              <p className="bg-moderateBlue text-white font-medium  rounded-sm text-sm px-2">
                you
              </p>
            )}

            <p className="text-grayishBlue">1 month ago</p>
            {/**Reply , edit and delete buttons for desktop*/}
            {currentUser.userName === userName ? (
              <div className="sm:flex  hidden items-center  px-2 gap-8 cursor-pointer h-8 sm:ml-auto">
                <div
                  className=" delete flex gap-1 flex-1 items-center"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <img
                    src={deleteIcon}
                    alt="delete icon"
                    className="w-3 h-3 "
                  />
                  <p className="text-softRed">Delete</p>
                </div>
                <div
                  className="edit flex gap-1 flex-1 items-center"
                  onClick={() => setShowUpdateForm(true)}
                >
                  <img src={edit} alt="edit icon" className="w-3 h-3 " />
                  <p className="text-moderateBlue">Edit</p>
                </div>
              </div>
            ) : (
              <div
                className="sm:flex sm:items-center hidden px-2 gap-1 cursor-pointer h-8 sm:ml-auto"
                onClick={() => handleFormDisplay(true, "reply")}
              >
                <img src={reply} alt="reply sign" className="w-3 h-3" />
                <p className="text-moderateBlue hover:text-lightGrayish font-bold">
                  Reply
                </p>
              </div>
            )}
          </div>
          <div className="sm:mb-2 sm:mr-2">
            {showUpdateForm ? (
              showUpdateForm && <Form formType="update" comment={comment} />
            ) : (
              <p className="text-grayishBlue">{comment}</p>
            )}
          </div>
        </div>
        <div className="flex items-center sm:hidden">
          <div className="py-1 px-2 flex  flex-row items-center gap-3 bg-veryLightGray rounded-md w-fit sm:flex-col">
            <img src={plus} alt="plus icon" className="cursor-pointer" />
            <p className="text-moderateBlue text-sm font-bold">12</p>
            <img src={minus} alt="minus icon" className="cursor-pointer" />
          </div>
          {/**Reply , edit and delete buttons for mobile */}
          {currentUser.userName === userName ? (
            <div className="flex items-center  px-2 gap-4 cursor-pointer h-8 ml-auto">
              <div
                className=" delete flex gap-1 flex-1 items-center"
                onClick={() => setShowDeleteModal(true)}
              >
                <img src={deleteIcon} alt="delete icon" className="w-3 h-3 " />
                <p className="text-softRed">Delete</p>
              </div>
              <div
                className="edit flex gap-1 flex-1 items-center"
                onClick={() => setShowUpdateForm(true)}
              >
                <img src={edit} alt="edit icon" className="w-3 h-3 " />
                <p className="text-moderateBlue">Edit</p>
              </div>
            </div>
          ) : (
            <div
              className="ml-auto flex gap-2 items-center cursor-pointer"
              onClick={() => handleFormDisplay(true, "reply")}
            >
              <img src={reply} alt="reply sign" className="w-3 h-3" />
              <p className="text-moderateBlue font-bold">Reply</p>
            </div>
          )}
        </div>
      </div>
      {showDeleteModal && <Modal setShowDeleteModal={setShowDeleteModal} />}
    </div>
  );
};

export default Comment;
function IRootState(state: any, IRootState: any) {
  throw new Error("Function not implemented.");
}
