import * as React from "react";
import amyRobson from "../assets/avatars/image-amyrobson.png";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IFormProps {
  formType: string;
}

const Form: React.FunctionComponent<IFormProps> = ({ formType }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formType === "reply") {
      console.log("reply");
    } else if (formType === "update") {
      console.log("update");
    } else {
      console.log("send");
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
            src={amyRobson}
            alt="profile picture"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <textarea
        className={
          formType === "update"
            ? "h-20 sm:h-24 p-2 border  border-lightGrayish rounded-md  focus:border-grayishBlue focus:outline-none"
            : "row-start-1 row-end-2 col-start-1 col-end-4 flex-1 h-20 sm:h-24 p-2 border  border-lightGrayish rounded-md  focus:border-grayishBlue focus:outline-none"
        }
        name="comment"
        id="comment"
        placeholder="Add a comment..."
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