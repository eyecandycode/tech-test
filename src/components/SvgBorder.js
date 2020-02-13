import React from "react";

function SvgBorder() {
  return (
    <svg
      className="svg-border"
      style={{
        fill: "none",
        strokeWidth: "5",
        position: "absolute",
        zIndex: "10",
        transform: "scale(0.64)",
        borderRadius: "10px"
      }}
      viewBox="0 0 239 333"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skyGradient" x1="100%" y1="100%">
          <stop offset="0%" stopColor="lightblue" stopOpacity=".8">
            <animate
              attributeName="stop-color"
              values="lightblue;blue;red;red;black;red;red;purple;lightblue"
              dur="14s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="lightblue" stopOpacity=".8">
            <animate
              attributeName="stop-color"
              values="lightblue;orange;purple;purple;black;purple;purple;blue;lightblue"
              dur="14s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="offset"
              values=".95;.80;.60;.40;.20;0;.20;.40;.60;.80;.95"
              dur="14s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      {/* Rounded corner rectangle */}
      <rect
        x="0"
        y="0"
        width="239"
        height="333"
        rx="10"
        stroke="url(#skyGradient)"
      />
    </svg>
  );
}

export default SvgBorder;
