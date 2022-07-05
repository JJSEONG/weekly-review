import React from "react";
import styled from "styled-components"
import { useState } from "react";

import { useHistory } from "react-router-dom";

const Home = (props) => {
  
  const history = useHistory();
  const Weekly = ["월", "화", "수", "목", "금", "토", "일"]
  
  let RandomSum = 0;

  const Week = Weekly.map((day) => {
    
    const RandomNum = Math.floor(Math.random() * 5) + 1
    RandomSum += RandomNum
    console.log(RandomNum)
    return { 
      day: day, review: RandomNum
    }
  })

  const [ Avg, setAvg ] = useState((RandomSum / 7).toFixed(1))
  // const Avg = (RandomSum / 7).toFixed(1)
  
  console.log(Week)
  console.log(`랜덤평점 합계 : ${RandomSum}`)
  console.log(`평점 : ${Avg}`)

  return (
    <>
      <WeekTitle>Weekly Review</WeekTitle>
      { Week.map((day, index) => {
        // console.log(`KEY : ${index}`)
        return (
          <>
            <Line key = { index }>
              <Day>{day.day}</Day>
              { Array.from({ length: 5 }, (val, idx) => {
                // console.log(`인덱스 : ${idx}`)
                // console.log(Avg)
                return <Circle key = { idx } style = {{
                  backgroundColor: day.review > idx && Avg !== 0 ? "pink" : "#ddd",
                }}></Circle>
              }) }
              <Arrow key = { index } onClick = {() => {
                history.push("/Detail/" + day.day)
              }}></Arrow>
            </Line>
          </>
        )
      }) }

      <AvgWrap>
        <h3>평균 평점</h3>
        <p>{Avg}</p>
        <button onClick={
          () => setAvg(RandomSum = 0)}>RESET</button>
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
const Day = styled.h3`
  margin: 10px;
  text-align: center;
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
`

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 14px solid transparent;
  border-top: 14px solid transparent;
  border-left: 24px solid yellowgreen;
  margin: 0 6px;
  cursor: pointer;
`

const AvgWrap = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  h3,p {
    margin: 0;
  }

  p {
    margin: 4px auto 20px;
  }

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

export default Home;