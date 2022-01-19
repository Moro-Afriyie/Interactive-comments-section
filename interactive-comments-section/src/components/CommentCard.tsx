import * as React from "react";
import amyRobson from "../assets/avatars/image-amyrobson.png";

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
      <div className="card__body">body</div>
      <div className="card__votes">votes</div>
      <div className="card__reply">reply</div>
    </div>
  );
};

export default CommentCard;
