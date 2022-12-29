import React, { useState } from "react";
import "./Pagination.css";

const numbers = [1, 2, 3, 4];
const Pagination = () => {
  const [btnChecked, setBtnChecked] = useState(1);
  const renderBtn = numbers.map((item, index) => {
    return (
      <button
        className={`mx-1 ${btnChecked == item ? "active" : ""}`}
        onClick={() => setBtnChecked(item)}
      >
        {item}
      </button>
    );
  });
  return (
    <div className="pagination">
      <div>
        <button className="mx-1">PREV</button>
        {renderBtn}
        <button className="mx-1">NEXT</button>
      </div>
    </div>
  );
};

export default Pagination;
