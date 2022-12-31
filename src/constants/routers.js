import ManageLayout from "../layouts/ManageLayout";
import MasterLayout from "../layouts/MasterLayout";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
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
    path: path.signIn,
    exact: true,
    component: Login,
    layout: MasterLayout,
    pageUrl: path.signIn,

  },
];

export default routes;
