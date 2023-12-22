import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function () {
  const user = useSelector((state) => state.auth.login.currentUser);
  return (
    <div className="pb-5 pt-2 text-white bg-[linear-gradient(-180deg,#f53d2d,#f63)]">
      <div className="container">
        <div className="flex justify-end">
          <div className="bg-white relative shadow-md rounded-sm border border-white">
            <div className="flex flex-col py-2 px-3">
              <button className="py-2 px-3 hover:text-orange">
                Tiếng việt
              </button>
              <button className="py-2 px-3 hover:text-orange mt-2">
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
