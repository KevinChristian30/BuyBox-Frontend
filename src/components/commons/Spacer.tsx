import React from "react";

export enum SpacerDirection {
  VERTICAL,
  HORIZONTAL,
}

interface SpacerProps {
  direction: SpacerDirection;
  space: number;
}

const Spacer = (props: SpacerProps) => {
  const { direction, space } = props;

  return (
    <div
      style={{
        height: direction === SpacerDirection.VERTICAL ? `${space}px` : 0,
        width: direction === SpacerDirection.HORIZONTAL ? `${space}px` : 0,
      }}
    ></div>
  );
};

export default Spacer;
