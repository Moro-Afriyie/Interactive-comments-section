import * as React from "react";
import amyRobson from "../assets/avatars/image-amyrobson.png";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IReplyFormProps {}

const ReplyForm: React.FunctionComponent<IReplyFormProps> = (props) => {
  return (
    <form className="bg-white grid grid-cols-3 grid-rows-form  shadow-sm p-3 gap-4 rounded-md sm:flex max-w-3xl">
      <div className="w-10 h-10 rounded-full row-start-2 row-end-3 col-start-1 col-end-2">
        <img src={amyRobson} alt="profile picture" className="w-full h-full" />
      </div>
      <textarea
        className="row-start-1 row-end-2 col-start-1 col-end-4 flex-1 h-24 p-2 border  border-lightGrayish rounded-md  focus:border-grayishBlue focus:outline-none"
        name="comment"
        id="comment"
        placeholder="Add a comment..."
      ></textarea>
      <button
        type="submit"
        className="uppercase justify-self-end text-white bg-moderateBlue  py-1 w-24 h-10 rounded-md col-start-3 col-end-4"
      >
        Send
      </button>
    </form>
  );
};

export default ReplyForm;
