import React from "react";
import { MdOutlineZoomOutMap, MdClose } from "react-icons/md";

export default function CustomModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div onClick={() => setShowModal(true)} className="absolute bottom-24 right-0 p-1 rounded-full mr-5 bg-white cursor-pointer">
        <MdOutlineZoomOutMap size={25} />
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-end bg-color-main-200 border-b-2">
                  <button
                    className="flex items-center background-transparent pr-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <span>Close</span> <MdClose size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
