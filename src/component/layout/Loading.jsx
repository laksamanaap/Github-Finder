import React from "react";
import Spinner from "./assets/GearSpinner.svg";

function Loading() {
  return (
    <div className="flex justify-center w-100 mt-20">
      <img src={Spinner} alt="Spinner" />
    </div>
  );
}

export default Loading;
