import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./constants/routers";

import MasterLayout from "./layouts/MasterLayout";

function App() {
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

export default App;
