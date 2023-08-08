import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Layout,
  Typography,
  Grid,
  Col,
  Button,
  Avatar,
  Popconfirm,
} from "antd";
import { logout } from "../pages/login/LoginActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const { useBreakpoint } = Grid;
  const { Title } = Typography;
  const { Header } = Layout;

  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const user = useSelector((state) => state.login.user);
  const screens = useBreakpoint();

  const baseStyles =
    "!bg-white !p-2.5 flex items-center justify-between z-[1] ";

  return (
    <Header
      className={
        location.pathname !== "/catalog"
          ? baseStyles + "border-b border-[#d32f2f]"
          : baseStyles
      }
    >
      <Col
        className="flex flex-row justify-start items-center"
        xs={11}
        sm={16}
        lg={10}
      >
        <Link to="catalog">
          <Title className="!m-[5px]">The Recipe Repository</Title>
        </Link>
      </Col>
      <Col
        flex="auto"
        className="h-full flex flex-row items-center justify-end"
      >
        {isAuthenticated ? (
          <div className="flex flex-row items-center pt-2 pr-2">
            {/* <Button
              type="link"
              className="pr-2.5"
              onClick={() => logout(navigate, dispatch)}
            >
              Log Out
            </Button> */}
            <Popconfirm
              placement="topLeft"
              title={"Are you sure you want to log out?"}
              onConfirm={() => logout(navigate, dispatch)}
              okText="Yes"
              cancelText="No"
            >
              <Avatar
                className="cursor-pointer bg-[#707597] align-middle"
                size="default"
              >
                {user.username ? user.username[0].toUpperCase() : null}
              </Avatar>
            </Popconfirm>
          </div>
        ) : null}
      </Col>
    </Header>
  );
};

export default Navbar;
