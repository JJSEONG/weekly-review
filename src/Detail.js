import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = (props) => {

  const history = useHistory()
  const params = useParams()
  const [rate, setRate] = React.useState(0);

  console.log(history)
  console.log(params.day)
  return (
    <>
      <WeekTitle>{params.day}요일 평점은?</WeekTitle>
      <>
        <Line>
          { Array.from({ length: 5 }, (val, idx) => {
            // console.log(`인덱스 : ${index}`)
            // console.log(Avg)
            return <Circle key = {idx}
              onClick={() => {setRate(idx + 1);}}
              style={{
                backgroundColor: rate < idx + 1 ? "#ddd" : "pink"
              }}></Circle>
          }) }
        </Line>
      </>
      <AvgWrap>
        <button onClick = {() => {
                history.goBack()}}>평점 남기기</button>
      </AvgWrap>
    </>
  )
}

const WeekTitle = styled.h1`
  width: 260px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
  text-align: center;
  text-shadow: 1px 1px 3px magenta;
  box-shadow: 3px 3px 8px pink;
  border-radius: 10px;
  margin-bottom: 50px;
`

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 6px;
  cursor: pointer;
`

const AvgWrap = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  button {
    width: 120px;
    height: 40px;
    background-color: transparent;
    border: 2px solid pink;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: pink;
    border: none;
    color: white;
  }
`

export default Detail;