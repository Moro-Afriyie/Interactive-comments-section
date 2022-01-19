import * as React from "react";
import amyRobson from "../assets/avatars/image-amyrobson.png";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ICommentCardProps {}

const CommentCard: React.FunctionComponent<ICommentCardProps> = (props) => {
  return (
    <div className="bg-white mx-3 shadow-sm p-3 rounded-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full">
          <img src={amyRobson} alt="profile picture w-full h-full" />
        </div>
        <p className="text-darkBlue font-bold">armyrobson</p>
        <p className="text-grayishBlue">1 month ago</p>
      </div>
      <div className="">
        <p className="text-grayishBlue">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          aliquam repellendus id quaerat dolorem voluptatum et corrupti eius!
          Ipsam quod exercitationem sunt eligendi at veritatis perferendis
          commodi est minima quaerat!
        </p>
      </div>
      <div className="py-1 px-2 flex items-center gap-3 bg-veryLightGray rounded-md w-fit">
        <img src={plus} alt="plus icon" />
        <p className="text-moderateBlue text-sm">12</p>
        <img src={minus} alt="minus icon" />
      </div>
      <div className="">
        <img src={reply} alt="reply sign" />
      </div>
    </div>
  );
};

export default CommentCard;
