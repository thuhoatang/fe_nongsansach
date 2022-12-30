import ManageLayout from "../layouts/ManageLayout";
import MasterLayout from "../layouts/MasterLayout";
import HomePage from "../pages/HomePage/HomePage";
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
];

export default routes;
