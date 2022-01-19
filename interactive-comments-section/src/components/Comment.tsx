import * as React from "react";
import amyRobson from "../assets/avatars/image-amyrobson.png";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentProps {}

const Comment: React.FunctionComponent<ICommentProps> = (props) => {
  return (
    <div className="bg-white  shadow-sm p-3 grid gap-4 rounded-md sm:flex max-w-3xl">
      {/*Vote button on desktop**/}
      <div className="sm:flex hidden py-2 px-2 max-h-20 flex-row items-center gap-3 bg-veryLightGray rounded-md w-fit sm:flex-col">
        <img src={plus} alt="plus icon" className="cursor-pointer" />
        <p className="text-moderateBlue text-sm font-bold">12</p>
        <img src={minus} alt="minus icon" className="cursor-pointer" />
      </div>
      {/*end vote button on desktop**/}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full">
            <img src={amyRobson} alt="profile picture w-full h-full" />
          </div>
          <p className="text-darkBlue font-bold">armyrobson</p>
          <p className="text-grayishBlue">1 month ago</p>
          {/*reply button on desktop**/}
          <div className="sm:flex sm:items-center hidden px-2 gap-1 cursor-pointer h-8 sm:ml-auto">
            <img src={reply} alt="reply sign" className="w-3 h-3" />
            <p className="text-moderateBlue font-bold">Reply</p>
          </div>
          {/*end reply button on desktop**/}
        </div>
        <div className="sm:mb-2 sm:mr-2">
          <p className="text-grayishBlue">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            aliquam repellendus id quaerat dolorem voluptatum et corrupti eius!
            Ipsam quod exercitationem sunt eligendi at veritatis perferendis
            commodi est minima quaerat!
          </p>
        </div>
      </div>
      <div className="flex items-center sm:hidden">
        <div className="py-1 px-2 flex  flex-row items-center gap-3 bg-veryLightGray rounded-md w-fit sm:flex-col">
          <img src={plus} alt="plus icon" className="cursor-pointer" />
          <p className="text-moderateBlue text-sm font-bold">12</p>
          <img src={minus} alt="minus icon" className="cursor-pointer" />
        </div>
        <div className="ml-auto flex gap-2 items-center cursor-pointer">
          <img src={reply} alt="reply sign" className="w-3 h-3" />
          <p className="text-moderateBlue font-bold">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
