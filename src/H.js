import React from "react";

const H = () => {
  return (
    <div className="label">
      <input type="text" placeholder="Enter your name" />
      <br></br>
      <input type="radio" />
      <br></br>
      <textarea />
      <br></br>

      <select>
        <option>select your course </option>
        <option> HTML </option>
        <option>React</option>
        <option>Java </option>
        <option>Python</option>
      </select>
    </div>
  );
};

export default H;
