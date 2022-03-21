import React from "react";
import Login from "./FootBar/Login";

export default function FootBar() {
  return (
    <div className="flex flex-row bg-neutral-700 text-white text-mono absolute bottom-0 inset-x-0 justify-center items-center">
      <Login />
    </div>
  );
}
