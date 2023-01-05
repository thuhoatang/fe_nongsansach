import OrderDetail from "../components/OrderDetail/OrderDetail";
import YourOrder from "../components/YourOrder/YourOrder";
import AdminMaster from "../layouts/AdminMaster";
import ManageLayout from "../layouts/ManageLayout";
import MasterLayout from "../layouts/MasterLayout";
import PersonalMaster from "../layouts/PersonalMaster";
import AdminDanhSachHoaDon from "../pages/AdminDanhSachHoaDon/AdminDanhSachHoaDon";
import DanhMucSanPham from "../pages/DanhMucSanPham/DanhMucSanPham";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
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
    component: AdminDanhSachHoaDon,
    layout: AdminMaster,
    pageUrl: path.admin,
  },
];

export default routes;
