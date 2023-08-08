import React from "react";
import RequireAuth from "../../utils/RequireAuth";
import { useSelector } from "react-redux";
import { Layout, Typography } from "antd";

const Catalog = RequireAuth(({}) => {
  const user = useSelector((state) => state.login.user);
  const { Content } = Layout;
  const { Paragraph } = Typography;

  return (
    <Content>
      <Layout className="min-h-full pb-[50px]">
        <Paragraph className="m-auto mt-3">
          Welcome <strong>{user.username}</strong>!
        </Paragraph>
        <Paragraph className="m-auto mt-3">
          More Good Stuff Coming Soon!!
        </Paragraph>
      </Layout>
    </Content>
  );
});

export default Catalog;
