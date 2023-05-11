import React from "react";

function Logo(props) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* <path
        d="M 50 5 L 90 30 L 90 70 L 50 95 L 10 70 L 10 30 Z"
        stroke="#fff"
        fill="none"
        strokeWidth="2"
      /> */}
      <path
        d="M10,10
           l0,80z
           l0,3
           a10,5 -15 1,1 0,40
           l40,37"
        stroke="#fff"
        fill="none"
        strokeWidth="8"
      />
    </svg>
  );
}

export default Logo;
