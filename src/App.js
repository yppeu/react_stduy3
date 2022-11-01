import logo from "./logo.svg";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import { useState } from "react";
import imgurl from "./img/selly.jpg";

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div
          className="main-bg"
          style={{ backgroundImage: "url(" + imgurl + ")" }}
        ></div>
        <Container>
          <Row>
            <Col xs>First, but unordered</Col>
            <div class="img-warp">
            <img src="https://images.velog.io/images/sa1341/post/165510e4-8f0e-4525-8bab-05466a6308a3/react.png" />
            </div>
            <h4>상품명</h4>
            <p>상품설명</p>
            <Col xs={{ order: 12 }}>Second, but last</Col>
            <div class="img-warp">
            <img 
              src="https://images.velog.io/images/sa1341/post/165510e4-8f0e-4525-8bab-05466a6308a3/react.png"
            />
            </div>
            <h4>상품명</h4>
            <p>상품설명</p>
            <Col xs={{ order: 1 }}>Third, but second</Col>
            <div class="img-warp">
            <img
              src="https://images.velog.io/images/sa1341/post/165510e4-8f0e-4525-8bab-05466a6308a3/react.png"
            />
            </div>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Row>
        </Container>
      </>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<div>어바웃페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
