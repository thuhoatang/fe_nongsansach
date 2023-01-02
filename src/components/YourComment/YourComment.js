import React from "react";

const YourComment = () => {
  return (
    <div className="your-comment">
      <b>Đánh giá của bạn</b>

      <div className="d-flex mt-3">
        <select className="combobox-rating">
          <option>Chọn sao</option>
          <option>2 sao</option>
          <option>3 sao</option>
          <option>4 sao</option>
          <option>5 sao</option>
        </select>
        <textarea className="text-comment mx-3" placeholder="Nhập bình luận" />

        <button className="submit-comment">Đăng bình luận</button>
      </div>
    </div>
  );
};

export default YourComment;
