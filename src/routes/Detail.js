import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';



let PinkBt = styled.button`
  background : ${props => props.bg};
  color: ${ props => props.bg == 'pink' ? 'black' : 'white'};
  padding:10px;
`

let Box = styled.div`
  background: gray;
  padding:20px;
`

function Detail(props) {

  useEffect(()=>{
    console.log('hi')
  })

  let [count, setCount] = useState(0);

  
  let {id} = useParams();
  let product = props.shoes.find((e)=>{
    return e.id == id;
  });
  console.log(id);
  
  return (
    <div className="container">
        {count}
        <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <Box>
        <PinkBt bg="pink">버튼</PinkBt>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;