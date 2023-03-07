import React, { useEffect, useRef } from "react";

const REFER = () => {
  const g = useRef();
  const d = (e) => {
    e.preventDefault();
    console.log(g.current.value);
    g.current.value = "Hellowrld";
  };
  useEffect(() => {
    g.current.focus();
  });
  return (
    <div>
      <form onSubmit={d}>
        <input type="text" ref={g} />
        <button>submit</button>
      </form>
    </div>
  );
};

export default REFER;
