import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useMatch,
} from "react-router-dom";
import { set_CurrentUser, set_Token } from "./pages/login/LoginActions";
import { isEmpty } from "./utils/";
import { Layout, message } from "antd";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Catalog from "./pages/catalog/Catalog";
import ErrorPage from "./components/ErrorPage";
import NotFoundPage from "./components/NotFoundPage";

// if (window.location.origin === "http://localhost:3000") {
//   axios.defaults.baseURL = "http://localhost:3000";
// } else {
//   axios.defaults.baseURL = window.location.origin;
// }

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  const displayMessage = (message, type) => {
    messageApi.open({
      type: type,
      content: message,
      duration: 3,
    });
  };

  const destroyMessage = () => {
    messageApi.destroy();
  };

  useEffect(() => {
    // check localStorage
    if (!isEmpty(localStorage.getItem("token"))) {
      console.log(localStorage.getItem("token"));
      set_Token(localStorage.getItem("token"), dispatch);
    }
    if (!isEmpty(localStorage.getItem("user"))) {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user, location);
      let redirectTo;
      if (
        location.pathname === "/signup" ||
        location.pathname === "/login" ||
        location.pathname === "/"
      ) {
        redirectTo = "/catalog";
      } else {
        redirectTo = "/login";
      }
      set_CurrentUser(user, redirectTo, navigate, dispatch);
    }
  }, []);

  return (
    <Layout className="min-h-full">
      <Navbar />
      {contextHolder}
      <Routes>
        <Route
          path="/"
          element={
            <Login
              dispatch={dispatch}
              displayMessage={displayMessage}
              destroyMessage={destroyMessage}
            />
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path="login"
          element={
            <Login
              dispatch={dispatch}
              displayMessage={displayMessage}
              destroyMessage={destroyMessage}
            />
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path="signup"
          element={
            <Signup
              dispatch={dispatch}
              displayMessage={displayMessage}
              destroyMessage={destroyMessage}
            />
          }
          errorElement={<ErrorPage />}
        />
        <Route
          path="catalog"
          element={
            <Catalog
              dispatch={dispatch}
              displayMessage={displayMessage}
              destroyMessage={destroyMessage}
            />
          }
          errorElement={<ErrorPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default App;
