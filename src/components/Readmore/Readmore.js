import React, { useState } from "react";
import "./Readmore.css";
const Readmore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className="text">
        {isReadMore ? text.slice(0, 300) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...đọc thêm" : " ẩn bớt"}
        </span>
      </p>
    </>
  );
};

export default Readmore;
