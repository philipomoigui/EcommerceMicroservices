import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = (props: { children: JSX.Element }) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex justify-center items-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="100"
            visible={true}
          />
        </div>
      }
    >
      {props.children}
    </React.Suspense>
  );
};

export default Loading;
