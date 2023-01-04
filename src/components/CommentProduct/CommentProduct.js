import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkReview, getReviewByProduct } from "../../service/reviewService";
import getQueryParams from "../../utils/queryParams";
import ItemComment from "../ItemComment/ItemComment";
import Pagination from "../Pagination/Pagination";
import YourComment from "../YourComment/YourComment";
import "./CommentProduct.css";
const CommentProduct = ({ reviews, auth, product_id, setReviews }) => {

  const [ratingSelected, setRatingSelected] = useState(
    {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    }
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [invoice_item_id, set_invoice_item_id] = useState(null);
  const [reviewable, setReviewable] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const invoice_item_id = getQueryParams(window.location.href)['invoice_item_id'];
      set_invoice_item_id(invoice_item_id)
      if (invoice_item_id !== undefined) {
        const data = await checkReview(invoice_item_id)
        console.log(data);

        if (data == true) {
          setReviewable(true)
        }
      }
    }
    getData();

  }, [])

  const getData = async () => {
    const ratings = Object.keys(ratingSelected).filter((item) => ratingSelected[item] == true ? item : false);
    let data = {
      product_id: product_id, page: currentPage
    }
    if (ratings.length > 0) {
      data['ratings[]'] = ratings
    }

    const res = await getReviewByProduct(data);
    setReviews({ items: res.reviews, ratings: res.ratings, pages: res.pages });

  }
  useEffect(() => { setCurrentPage(1) }, [ratingSelected]);
  useEffect(() => {

    getData();
  }, [currentPage, ratingSelected])
  return (
    <>
      {(auth !== null && invoice_item_id !== undefined && reviewable) ? < YourComment getData={getData} setReviewable={setReviewable} invoice_item_id={invoice_item_id} /> : ''}

      <div className="comment">
        <p className="title-comment">Xem đánh giá khách hàng</p>
        <div className="rating-star text-left d-flex">
          {Object.keys(reviews?.ratings)?.map((item) => {
            return (<div key={item} className="rating-item"
              style={ratingSelected[item] === true ? { border: '3px solid #f1b500' } : {}}
              onClick={() => setRatingSelected({ ...ratingSelected, [item]: !ratingSelected[item] })}
            >
              <p>{item}</p>
              <iconify-icon
                icon="ic:round-star-rate"
                style={{
                  fontSize: "30px",
                  height: "100%",
                  position: "relative",
                  top: "7px",
                  color: "rgb(255, 251, 0)",
                }}
              ></iconify-icon>
              <p>({reviews.ratings[item]})</p>
            </div>)
          })}


        </div>

        <div className="list-comment">
          {reviews.items.map((item) => <ItemComment key={item.id} values={item} />)}

        </div>

        <Pagination pages={reviews.pages} current={currentPage} onClickPagination={setCurrentPage} />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth }
}
export default connect(mapStateToProps)(CommentProduct);
