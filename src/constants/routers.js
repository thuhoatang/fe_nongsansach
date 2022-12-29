import MasterLayout from "../layouts/MasterLayout";
import HomePage from "../pages/HomePage/HomePage";
import { path } from "./string";

const routes = [
  {
    path: path.trangChu,
    exact: true,
    component: HomePage,
    layout: MasterLayout,
    pageUrl: path.trangChu,
  },
];

export default routes;
