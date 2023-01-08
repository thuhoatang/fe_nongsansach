import DanhSachHoaDon from "../components/DanhSachHoaDon/DanhSachHoaDon";

import YourOrder from "../components/YourOrder/YourOrder";
import AdminMaster from "../layouts/AdminMaster";
import ManageLayout from "../layouts/ManageLayout";
import MasterLayout from "../layouts/MasterLayout";
import PersonalMaster from "../layouts/PersonalMaster";
import DanhMucSanPham from "../pages/DanhMucSanPham/DanhMucSanPham";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import OrderDetail from "../components/OrderDetail/OrderDetail";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import { path } from "./string";
import LoginWithGoogle from "../pages/LoginWithGoogle/LoginWithGoogle";
import AuthGoogle from "../pages/LoginWithGoogle/AuthGoogle";
import OrderDetailAd from "../pages/OrderDetail_ad/OrderDetailAd";

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

  {
    path: path.yourOrder,
    exact: true,
    component: YourOrder,
    layout: PersonalMaster,
    pageUrl: path.yourOrder,
  },

  {
    path: path.personal,
    exact: true,
    component: PersonalPage,
    layout: PersonalMaster,
    pageUrl: path.personal,
  },

  {
    path: path.orderDetail,
    exact: true,
    component: OrderDetail,
    layout: PersonalMaster,
    pageUrl: path.orderDetail,
  },

  {
    path: path.admin,
    exact: true,
    component: DanhSachHoaDon,
    layout: AdminMaster,
    pageUrl: path.admin,
  },

  {
    path: path.adminOrderDetail,
    exact: true,
    component: OrderDetailAd,
    layout: AdminMaster,
    pageUrl: path.adminOrderDetail,
  },

  {
    path: path.googleSignIn,
    exact: true,
    component: LoginWithGoogle,
    layout: MasterLayout,
    pageUrl: path.googleSignIn,
  },
  {
    path: path.googleAuth,
    exact: true,
    component: AuthGoogle,
    layout: MasterLayout,
    pageUrl: path.googleAuth,
  },
];

export default routes;
