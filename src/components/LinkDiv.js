import React from "react";

function LinkDiv() {
  return (
    <a href="https://magic.wizards.com/en/products/throne-of-eldraine">
      <div
        style={{
          position: "absolute",
          background: "transparent",
          zIndex: "111",
          height: "310px",
          width: "300px",
          bottom: "0px",
          cursor: "pointer"
        }}
      ></div>
    </a>
  );
}

export default LinkDiv;
