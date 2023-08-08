import React from "react";
import { useLocation } from "react-router-dom";
import { Layout, Row, Col, Typography } from "antd";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.login.user);
  let location = useLocation();
  const { Footer } = Layout;
  const { Text } = Typography;

  return (
    <Footer className="w-full fixed bottom-0 z-[1] !bg-white border-t border-[#d32f2f] text-center !p-2.5">
      {location.pathname === "/catalog" ? (
        <Row justify={"center"}>
          <Col>
            <Text italic>
              Welcome <strong>{user.username}</strong>!
            </Text>
          </Col>
        </Row>
      ) : location.pathname === "/login" || location.pathname === "/signup" ? (
        <Text italic strong>
          Welcome to the Recipe Repo
        </Text>
      ) : (
        <Text italic strong>
          Welcome to the Recipe Repo
        </Text>
      )}
    </Footer>
  );
};

export default Footer;
