import logo from "./logo.svg";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import { useState } from "react";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{
              navigate('/')
            }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate('/detail')
            }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/"
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

        <Route path="/event" element={<Event />} >
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
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
