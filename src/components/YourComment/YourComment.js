import React, { useState } from "react";
import { postReview } from "../../service/reviewService";

const YourComment = ({ setReviewable, invoice_item_id, getData }) => {
  const [review, setReview] = useState({ rating: 'false', content: '' })
  const [error, setError] = useState(null);


  const onClickSubmit = async () => {
    if (review.rating != 'fasle' && review.content != '') {
      await postReview(invoice_item_id, review.rating, review.content);
      setReviewable(false)
      getData();
    } else {
      setError('Vui lòng nhập đủ thông tin')
    }
  }
  return (
    <div className="your-comment">
      <b>Đánh giá của bạn</b>

      {error !== null ? <p>Vui lòng nhập đủ thông tin</p> : null}
      <div className="d-flex mt-3">
        <select onChange={e => setReview({ ...review, rating: e.target.value })} value={review.rating} className="combobox-rating">
          <option value={false}>Chọn sao</option>
          <option value={1}>1 sao</option>
          <option value={2}>2 sao</option>
          <option value={3}>3 sao</option>
          <option value={4}>4 sao</option>
          <option value={5}>5 sao</option>
        </select>
        <textarea onChange={e => setReview({ ...review, content: e.target.value })} className="text-comment mx-3" placeholder="Nhập bình luận" />

        <button onClick={onClickSubmit} className="submit-comment">Đăng bình luận</button>
      </div>
    </div>
  );
};

export default YourComment;
