import React, { Component } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Row,
  Col,
  Input,
  Dropdown,
  Icon,
  Carousel,
  Card
} from "antd";
const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Kemeja
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Dress
      </a>
    </Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Heels
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Sandal
      </a>
    </Menu.Item>
  </Menu>
);
const menu3 = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Sekolah
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Petualang
      </a>
    </Menu.Item>
  </Menu>
);
const menu4 = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Topi
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href=".">
        Dompet
      </a>
    </Menu.Item>
  </Menu>
);

export default class LayoutHome extends Component {
  render() {
    return (
      <Layout>
        {/* Ini Header yakk        */}

        <Header
          align="left"
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "silver"
          }}
        >
          <Row>
            <Col span={12}>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyIiBoZWlnaHQ9IjE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTQ1LjgzOCA0LjY3M2MtLjkzNCAwLTEuNjkuNzYtMS42OSAxLjY5N3YuMTMzaDMuMzA3djkuNzg2aDIuMzIxVjYuNTAzaDMuMzE1di0xLjgzaC03LjI1M3pNOTEuNzA3IDkuNjMyaC0uNzYzVjYuNTAzaC43NjNjMS4xNiAwIDIuNDUzLjExNyAyLjQ1MyAxLjUxNiAwIDEuNDQ4LTEuMzA2IDEuNjE0LTIuNDUzIDEuNjE0di0uMDAxem0zLjcxMyAyLjExNmMtLjIzMy0uNTE3LS41OTUtMS4xNDgtMS4yMjYtMS4xOTl2LS4wMzNhMi42NTQgMi42NTQgMCAwIDAgMi4zODYtMi42OThjMC0zLjIyNy0yLjk2OC0zLjE0NS01LjQ1My0zLjE0NWgtLjgxNGExLjY5NCAxLjY5NCAwIDAgMC0xLjY4OCAxLjY5N3Y5LjkyOGgyLjMxOXYtNC44MzRoLjc0NmMuOTc4IDAgMS4yNzYuMzMzIDEuNjA5IDEuMTk2bDEuMzkxIDMuNjI5aDIuNTc5bC0xLjg1LTQuNTR6TTEwMC4zNiA0LjY3M2MtLjkzMyAwLTEuNjkuNzYtMS42OSAxLjY5N3Y5LjkyOGgyLjMyVjQuNjg1bC0uNjMtLjAxMnpNNzMuNzYxIDQuNjczYy0uOTMzIDAtMS42OS43Ni0xLjY5IDEuNjk3djIuOTk3aC00LjY0VjQuNjczaC0uNjI5Yy0uOTMzIDAtMS42OS43Ni0xLjY5IDEuNjk3djkuOTI4aDIuMzJ2LTUuMWg0LjY0M3Y1LjA5aDIuMzJWNC42NzZsLS42MzQtLjAwMnpNMzAuMjgyIDQuNjczYy0uOTQ4LjE0LTEuNzQuNzkyLTIuMDY0IDEuNjk3TDI2IDEzLjQ3N2gtLjAzNGwtMi43NjUtOC44MDRoLTIuMDEzYy0uOTMzIDAtMS42OS43Ni0xLjY5IDEuNjk3djkuOTI4aDIuMjIyVjYuNzQ1bC4wMzQtLjAzNCAzLjExNSA5LjU4N2gyLjIybDMuMTE4LTkuNTg3aC4wMzR2OS41NzhoMi4yMlY0LjY3NWwtMi4xOC0uMDAyek0zNy41MyAxMS43OTVsMS42NzktNC43OTNoLjAzNGwxLjY3OSA0Ljc5M0gzNy41M3ptMy4wNS03LjExOGgtMS4yMTJhMi42MDIgMi42MDIgMCAwIDAtMS45OSAxLjQ5OWwtLjA3Mi4xODctMy44NSA5LjkyOGgyLjQwMmwxLjAxMS0yLjY2NGg0LjY5bC45OTUgMi42NjRoMi41N0w0MC41OCA0LjY3N3pNNTYuMTg1IDExLjc5NWwxLjY3OS00Ljc5M2guMDMzbDEuNjggNC43OTNoLTMuMzkyem0zLjA1LTcuMTE4aC0xLjIxM2EyLjYwMiAyLjYwMiAwIDAgMC0xLjk4OCAxLjQ5OSAxLjg3OCAxLjg3OCAwIDAgMC0uMDczLjE4N2wtMy44NSA5LjkyOGgyLjQwNGwxLjAxMS0yLjY2NGg0LjY5bC45OTUgMi42NjRoMi41NjlMNTkuMjM1IDQuNjc3ek03OS43OTUgMTEuNzk1bDEuNjc5LTQuNzkzaC4wMzNsMS42OCA0Ljc5M2gtMy4zOTJ6bTMuMDUtNy4xMThoLTEuMjEzYTIuNjAyIDIuNjAyIDAgMCAwLTEuOTg4IDEuNDk5IDEuOSAxLjkgMCAwIDAtLjA3My4xODdsLTMuODUgOS45MjhoMi40MDJsMS4wMTEtMi42NjRoNC42OWwuOTk1IDIuNjY0aDIuNTYyTDgyLjg0NSA0LjY3N3oiIGZpbGw9IiMyQjJGMzIiLz48cGF0aCBkPSJNMTUuNzk5IDguNjQ2aC0uOTkzYS43MDguNzA4IDAgMCAwLS42OS41NjJjMCAuMDM0IDAgLjA2OC0uMDEzLjEwMS0uMDEzLjAzNCAwIC4wMzggMCAuMDU3LS4zODMgMi44MjQtMi45MSA0Ljg0Ni01LjczOCA0LjU5LTIuODI3LS4yNTYtNC45NTQtMi43LTQuODI4LTUuNTQ2LjEyNi0yLjg0OCAyLjQ2LTUuMDkyIDUuMjk5LTUuMDk1VjEuNzFBLjcxLjcxIDAgMCAwIDguMTM0IDFDNC4wMTggMS4zOC45NDggNC45NzYgMS4yMDEgOS4xMThjLjI1MyA0LjE0MiAzLjczOCA3LjMzNCA3Ljg3IDcuMjA2IDQuMTMxLS4xMjggNy40MTUtMy41MjggNy40MTQtNy42NzhIMTUuOHoiIGZpbGw9IiNFQjAwMjkiLz48cGF0aCBkPSJNNC44NzUgOC42NDZhMy45NyAzLjk3IDAgMCAwIDMuOTYyIDMuODkzIDMuOTcgMy45NyAwIDAgMCAzLjk2Mi0zLjg5M2gtMS41OWEuOTk2Ljk5NiAwIDAgMC0uODU4LjU4IDEuNjE4IDEuNjE4IDAgMCAxLTIuMDQ3Ljk1OSAxLjYyOSAxLjYyOSAwIDAgMSAuNTMyLTMuMTY3aDcuNjVWNS4zOGEuNzEuNzEgMCAwIDAtLjcxLS43MTFoLTYuOTRhMy45NyAzLjk3IDAgMCAwLTMuOTYxIDMuOTc4IiBmaWxsPSIjRUIwMDI5Ii8+PC9nPjwvc3ZnPg==" />
            </Col>
            <Col span={4}>
              <Button shape="circle" icon="search" />
            </Col>
            <Col span={8}>
              <Input placeholder="Search" />
            </Col>
          </Row>
        </Header>

        {/* Ini Navbar nya yakk  */}

        <Content align="center" style={{ padding: "0 0px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                PAKAIAN &nbsp;
              </a>
            </Dropdown>
            <Dropdown overlay={menu2}>
              <a className="ant-dropdown-link" href="#">
                SEPATU &nbsp;
              </a>
            </Dropdown>
            <Dropdown overlay={menu3}>
              <a className="ant-dropdown-link" href="#">
                TAS &nbsp;
              </a>
            </Dropdown>
            <Dropdown overlay={menu4}>
              <a className="ant-dropdown-link" href="#">
                AKSESORIS &nbsp;
              </a>
            </Dropdown>
          </Breadcrumb>
          {/* Ini Content nya yakk          */}
          <div style={{ background: "#fff", padding: 10, maxHeight: 150 }}>
            <Carousel autoplay>
              <div>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/160519/160519_NEW/DESKTOP_A1_MENWOMEN.gif"
                  style={{ maxHeight: 160 }}
                />
              </div>
              <div>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/140519/DESKTOP_A2.jpg"
                  style={{ maxHeight: 160 }}
                />
              </div>
              <div>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/160519/160519_NEW/DESKTOP_A1_MENWOMEN.gif"
                  style={{ maxHeight: 160 }}
                />
              </div>
              <div>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/140519/DESKTOP_A2.jpg"
                  style={{ maxHeight: 160 }}
                />
              </div>
            </Carousel>
            <br />
            <Row>
              <Col span={12}>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/130519/DESKTOP_B1_WOMEN-02.jpg"
                  style={{ maxWidth: 140 }}
                />
              </Col>
              <Col span={12}>
                <img
                  src="https://mm-image-marketing.s3.amazonaws.com/mds/banner/2019/MAY/140519/DESKTOP_B2_WOMEN-03.jpg"
                  style={{ maxWidth: 140 }}
                />
              </Col>
            </Row>
          </div>
          <br />
          <h3>PRODUK TERBARU</h3>
          <div style={{ background: "#ECECEC" }}>
            <Row gutter={5}>
              <Col span={8}>
                <Card title="Nevada" bordered={false}>
                  <img
                    src="https://mm-imgs.s3.amazonaws.com/tx400/2019/05/15/14/celana-panjang-wanita_nevada-celana-panjang-night-bear-black_4793179__047792.jpg"
                    style={{ maxWidth: 70 }}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="ST.YVES" bordered={false}>
                  <img
                    src="https://mm-imgs.s3.amazonaws.com/tx400/2019/05/15/14/blouse_st.yves-blouse-lengan-panjang-print-forest-green_4793048__048312.jpg"
                    style={{ maxWidth: 70 }}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="ST.YVES" bordered={false}>
                  <img
                    src="https://mm-imgs.s3.amazonaws.com/tx400/2019/05/16/14/st-yves-celana-panjang-heritage-indies-off-white_4793181_2_91739.jpg"
                    style={{ maxWidth: 70 }}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>

        {/* Ini Footer yakk */}

        <Footer style={{ textAlign: "center" }}>
          Created by Khoirul Musyafa
        </Footer>
      </Layout>
    );
  }
}
