import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ current = 1, pages = 0, onClickPagination }) => {

  const renderBtn = Array.from({ length: pages }, (value, index) => index + 1).map((item) => {
    return (
      <button
        key={item}
        className={`mx-1 ${current === item ? "active" : ""}`}
        onClick={() => onClickPagination(item)}
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
