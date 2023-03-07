import React, { useState } from "react";

const Label = () => {
  const [height, setheight] = useState(50);

  const h = () => {
    setheight(height + 1);
    document.querySelector("#c").style.height = `${height}px`;
    console.log("textarea height" + height);
  };

  return (
    <>
      <textarea onChange={h} style={{ height: `${height}px` }} id="c" />
    </>
  );
};

export default Label;
