import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IModalProps {}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  return (
    <div className="fixed w-full h-full top-0 left-0  inset-0 flex items-center justify-center bg-darkBlue bg-opacity-30">
      <div className="max-w-xs w-full mx-3 sm:mx-auto  p-6 bg-white flex flex-col gap-3 rounded-md">
        <p className="text-2xl">Delete comment</p>
        <p className="mb-4 text-sm">
          Are you sure you want to remove this comment? This will remove the
          comment and can&apos;t be undone.
        </p>
        <div className="flex gap-2">
          <button className=" flex-1 px-4 py-2 text-white text-sm bg-darkBlue rounded-md uppercase">
            no, cancel
          </button>
          <button className=" flex-1 px-4 py-2 text-white text-sm bg-softRed rounded-md uppercase">
            yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
