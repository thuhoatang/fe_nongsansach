import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./constants/routers";
import * as creategoryService from './service/categoryService';
import { useEffect } from "react";
import { fetchCategories } from "./actions/categoryAction";
import { checkAuthAction } from './actions/authAction'
import { connect } from "react-redux";
import Spinner from "./components/Spinner/Spinner";
import { changeStatusSpinner } from "./actions/spinnerActtion";
import Notification from "./components/Notification/Notification";

function App({
  fetchCategories,
  checkAuthAction,
  changeStatusSpinner
}) {
  useEffect(() => {
    const setup = async () => {
      changeStatusSpinner(true);
      const cate = fetchCategories();
      const check = checkAuthAction();

      await Promise.all([cate, check]).then((values) => {
        changeStatusSpinner(false)
      });
    }
    setup();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.layout urlPage={route.pageUrl}>
                  <route.component />
                </route.layout>
              }
              exact
            />
          ))}
          {/* <MasterLayout /> */}
        </Routes>
      </BrowserRouter>
      <Spinner />
      <Notification />
    </>
  );
}
export default connect(null, {
  fetchCategories, checkAuthAction, changeStatusSpinner
})(App);
// export default App;
