import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center ">
      <div className="  bg-white z-0 w-full  -mt-8">
        <img
          className=" z-0 object-cover w-fit mx-auto"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Page Not Found"
        />
      </div>

      <div className="bg-white z-50 flex flex-col items-center w-full pb-28 -mt-32">
        <p className="text-2xl text-gray-600 ">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for does not exist.
        </p>
        <div>
          <button
            className="text-gray-900 bg-blue-500 py-1 px-4 my-4 rounded-sm"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
