import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Page1 from "../components/Recommend/Page1";
import Page2a from "../components/Recommend/Page2a";
import Page2b from "../components/Recommend/Page2b";
import Page2c from "../components/Recommend/Page2c";
import Page3a from "../components/Recommend/Page3a";
import Page3b from "../components/Recommend/Page3b";

export default function Recommend() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  // 중복 체크 방지
  const handleCheckboxChange = (checkboxIndex) => {
    if (checkboxIndex === 1) {
      setIsChecked1(!isChecked1);
      setIsChecked2(false);
      setIsChecked3(false);
    } else if (checkboxIndex === 2) {
      setIsChecked2(!isChecked2);
      setIsChecked1(false);
      setIsChecked3(false);
    } else if (checkboxIndex === 3) {
      setIsChecked3(!isChecked3);
      setIsChecked1(false);
      setIsChecked2(false);
    }
  };

  return (
    <div>
      <Header />
      <RecommendWrap>
        <div className="recommend_title">맞춤 회고 유형 추천</div>
        <Page3b
          isChecked1={isChecked1}
          isChecked2={isChecked2}
          isChecked3={isChecked3}
          handleCheckboxChange={handleCheckboxChange}
        />
        <button
          className={`next_btn ${
            isChecked1 || isChecked2 || isChecked3 ? "active" : ""
          }`}
        >
          다음
        </button>
      </RecommendWrap>
    </div>
  );
}

const RecommendWrap = styled.div`
  height: 742px;
  background: var(--Background, #121212);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  .recommend_title {
    width: 100%;
    height: 90px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    text-align: center;
    padding: 26px 0;
    box-sizing: border-box;

    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .next_btn {
    width: 152px;
    height: 53px;
    border: none;
    border-radius: 8px;
    background: var(--primary-800, #305d40);

    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .next_btn.active {
    background: var(--primary-400, #79cd96);
  }
`;
