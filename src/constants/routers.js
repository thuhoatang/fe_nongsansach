import ManageLayout from "../layouts/ManageLayout";
import MasterLayout from "../layouts/MasterLayout";
import DanhMucSanPham from "../pages/DanhMucSanPham/DanhMucSanPham";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import { path } from "./string";

const routes = [
  {
    path: path.trangChu,
    exact: true,
    component: HomePage,
    layout: MasterLayout,
    pageUrl: path.trangChu,

  },

  {
    path: path.thanhToanGioHang,
    exact: true,
    component: Payment,
    layout: ManageLayout,
    pageUrl: path.thanhToanGioHang,
  },

  {

    path: path.danhMucSanPham,
    exact: true,
    component: DanhMucSanPham,
    layout: MasterLayout,
    pageUrl: path.danhMucSanPham,
},
{
    path: path.signIn,
    exact: true,
    component: Login,
    layout: MasterLayout,
    pageUrl: path.signIn,

  },

  {
    path: path.chiTietSanPham,
    exact: true,
    component: ProductsPage,
    layout: MasterLayout,
    pageUrl: path.chiTietSanPham,
  },
];

export default routes;
