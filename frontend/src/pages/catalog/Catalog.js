import React from "react";
import RequireAuth from "../../utils/RequireAuth";
import { Layout, Typography } from "antd";

const Catalog = RequireAuth(({}) => {
  const { Content } = Layout;
  const { Paragraph } = Typography;

  return (
    <Content>
      <Layout className="min-h-full pb-[50px]">
        <Paragraph className="m-auto mt-3">
          More Good Stuff Coming Soon!!
        </Paragraph>
      </Layout>
    </Content>
  );
});

export default Catalog;
