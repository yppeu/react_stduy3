import logo from "./logo.svg";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Row>
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i}></Card>;
                })}
              </Row>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<div>어바웃페이지</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div class="img-warp">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
