import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardLoading = (props) => {
  return (
    <>
      {Array(props.count)
        .fill(null)
        .map((item, i) => (
          <SkeletonTheme baseColor="#3a364d" highlightColor="#433e59" key={i}>
            <div className="bg-th-blue-dark p-3.5 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <Skeleton count={1} width={100} height={75} />
                </div>
                <div className="mt-2">
                  <Skeleton count={1} width={100} />
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ))}
    </>
  );
};

export default CardLoading;
