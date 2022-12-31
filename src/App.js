import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./constants/routers";
import * as creategoryService from './service/categoryService';
import { useEffect } from "react";
import { fetchCategories } from "./actions/categoryAction";
import { checkAuthAction } from './actions/authAction'
import { connect } from "react-redux";

function App({
  fetchCategories,
  checkAuthAction
}) {
  useEffect(() => {
    const setup = async () => {
      fetchCategories();
      checkAuthAction();
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
    </>
  );
}
export default connect(null, {
  fetchCategories, checkAuthAction
})(App);
// export default App;
