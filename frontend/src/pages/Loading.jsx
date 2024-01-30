import React from "react";
import "./Spinner.css";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
      <div className="shapes"></div>
      <p className="text-bgDark text-lg mt-10 font-semibold">Loading....</p>
    </div>
  );
};

export default Loading;
