import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route
          path="/detail"
          element={
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://codingapple1.github.io/shop/shoes1.jpg"
                    width="100%"
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="pt-5">상품명</h4>
                  <p>상품설명</p>
                  <p>120000원</p>
                  <button className="btn btn-danger">주문하기</button>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<div>어바웃페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
