import React, { useEffect, useState } from "react";
import FilterCategoryLeft from "../../components/FilterCategoryLeft/FilterCategoryLeft";
import "./DanhMucSanPham.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import Pagination from "../../components/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { searchProduct } from "../../service/searchService";
import { connect } from "react-redux";
import { changeStatusSpinner } from "../../actions/spinnerActtion";

const orderBys = {
  0: null,
  1: { by: 'price', order: 'desc' },// tang dan
  2: { by: 'price', order: 'asc' },
  3: { by: 'rate', order: 'desc' },
  4: { by: 'rate', order: 'asc' },
}
const DanhMucSanPham = ({ categories, changeStatusSpinner }) => {
  const { danhmuc_id } = useParams();
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pages: 0 });
  const [price, setPrice] = useState({ start: '', end: '' });
  const [orderBy, setOrderBy] = useState(0);


  useEffect(() => {
    const getData = async () => {
      changeStatusSpinner(true)

      const data = await searchProduct({ 'categories[]': danhmuc_id, limit: 6 });
      setProducts(data.products)
      setPagination({ pages: data.pages, current: 1 })
      changeStatusSpinner(false)

    }
    getData();
  }, [])


  const onClickPagination = (page) => {
    const getData = async () => {
      changeStatusSpinner(true)

      let query = { 'categories[]': danhmuc_id, limit: 6, }

      if (price.start != '' && price.start != null) {
        query.price_starts = price.start
      }

      if (price.end != '' && price.end != null) {
        query.end_price = price.end
      }

      if (orderBy !== 0) {
        query = { ...query, ...orderBys[orderBy] }
      }
      query.page = page;

      const data = await searchProduct(query);
      setProducts(data.products)
      setPagination({ ...pagination, current: page })
      changeStatusSpinner(false)

    }
    getData();
  };

  const onClickBtnApplay = () => {
    changeStatusSpinner(true)

    const getData = async () => {
      let query = { 'categories[]': danhmuc_id, limit: 6, }

      if (price.start != '' && price.start != null) {
        query.price_starts = price.start
      }

      if (price.end != '' && price.end != null) {
        query.end_price = price.end
      }
      if (orderBy !== 0) {
        query = { ...query, ...orderBys[orderBy] }
      }
      const data = await searchProduct(query);
      setProducts(data.products)
      setPagination({ current: 1, pages: data.pages })
      changeStatusSpinner(false)

    }
    getData();
  }

  return (
    <div className="category d-flex justify-content-between">
      <div className="category-"></div>
      <div className="left-category">
        <FilterCategoryLeft onClickBtnApplay={onClickBtnApplay} price={price} setPrice={setPrice} />
      </div>
      <div className="body-category">
        <div className="header d-flex justify-content-between">
          <p className="title-body-category">{categories.find((item) => item.id == danhmuc_id)?.name}</p>
          <select onChange={(e) => setOrderBy(e.target.value)} value={orderBy} className="sort-product">
            <option value={0}>S???p x???p theo:</option>
            <option value={1}>Gi?? (gi???m d???n)</option>
            <option value={2}>Gi?? (t??ng d???n)</option>
            <option value={3}>????nh gi?? (gi???m d???n)</option>
            <option value={4}>????nh gi?? (t??ng d???n)</option>
          </select>
        </div>
        <div className="bar-header"></div>
        <div className="list-product">
          {products.map((product) => (<CardProduct key={product.id} product={product} />))}
        </div>

        <Pagination onClickPagination={onClickPagination} pages={pagination.pages} current={pagination.current} />
      </div>
    </div >
  );
};

const mapStasteToProps = (state) => {
  return {
    categories: state.categories
  }
}
export default connect(mapStasteToProps, { changeStatusSpinner })(DanhMucSanPham);
