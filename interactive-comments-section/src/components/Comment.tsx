import * as React from "react";
import amyRobson from "../assets/avatars/image-amyrobson.png";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";
import edit from "../assets/icon-edit.svg";
import deleteIcon from "../assets/icon-delete.svg";
import Form from "./Form";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
}

const Comment: React.FunctionComponent<ICommentProps> = ({
  setShowForm,
  setFormType,
}) => {
  const handleFormDisplay = (showForm: boolean, formType: string) => {
    setShowForm(showForm);
    setFormType(formType);
  };

  return (
    <div className="bg-white  shadow-sm p-3 grid gap-4 rounded-md sm:flex max-w-3xl font-rubik">
      {/*Vote button on desktop**/}
      <div className="sm:flex hidden py-2 px-2 max-h-20 flex-row items-center gap-3 bg-veryLightGray rounded-md w-fit sm:flex-col">
        <img src={plus} alt="plus icon" className="cursor-pointer" />
        <p className="text-moderateBlue text-sm font-bold">12</p>
        <img src={minus} alt="minus icon" className="cursor-pointer" />
      </div>
      {/*end vote button on desktop**/}
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full">
            <img
              src={amyRobson}
              alt="profile picture"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-darkBlue font-bold">armyrobson</p>

          <p className="bg-moderateBlue text-white font-medium  rounded-sm text-sm px-2">
            you
          </p>

          <p className="text-grayishBlue">1 month ago</p>
          {/*reply button on desktop**/}
          {/* <div
            className="sm:flex sm:items-center hidden px-2 gap-1 cursor-pointer h-8 sm:ml-auto"
            onClick={() => handleFormDisplay(true, "reply")}
          >
            <img src={reply} alt="reply sign" className="w-3 h-3" />
            <p className="text-moderateBlue hover:text-lightGrayish font-bold">
              Reply
            </p>
          </div> */}
          {/*end reply button on desktop**/}

          {/*edit and delete button on desktop**/}
          <div className="sm:flex sm:items-center hidden px-2 gap-8 cursor-pointer h-8 sm:ml-auto">
            <div className=" delete flex gap-1 flex-1 items-center">
              <img src={deleteIcon} alt="delete icon" className="w-3 h-3 " />
              <p className="text-softRed">Delete</p>
            </div>
            <div className="edit flex gap-1 flex-1 items-center">
              <img src={edit} alt="edit icon" className="w-3 h-3 " />
              <p className="text-moderateBlue">Edit</p>
            </div>
          </div>
          {/*end edit and delete button on desktop**/}
        </div>
        <div className="sm:mb-2 sm:mr-2">
          {/* <p className="text-grayishBlue">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            aliquam repellendus id quaerat dolorem voluptatum et corrupti eius!
            Ipsam quod exercitationem sunt eligendi at veritatis perferendis
            commodi est minima quaerat!
          </p> */}
          <Form formType="update" />
        </div>
      </div>
      <div className="flex items-center sm:hidden">
        <div className="py-1 px-2 flex  flex-row items-center gap-3 bg-veryLightGray rounded-md w-fit sm:flex-col">
          <img src={plus} alt="plus icon" className="cursor-pointer" />
          <p className="text-moderateBlue text-sm font-bold">12</p>
          <img src={minus} alt="minus icon" className="cursor-pointer" />
        </div>
        <div
          className="ml-auto flex gap-2 items-center cursor-pointer"
          onClick={() => handleFormDisplay(true, "reply")}
        >
          <img src={reply} alt="reply sign" className="w-3 h-3" />
          <p className="text-moderateBlue font-bold">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
