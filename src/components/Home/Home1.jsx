import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Home1() {
  return (
    <Home1Wrap>
      <p className="title">
        <span>Remini</span> : 맞춤 회고 유형 추천 및 가이드
      </p>
      <div className="font">
        <p>상황에 맞는 맞춤 회고 유형을 추천하고 가이드라인을 제공함으로써</p>
        <p>
          더 나은 자신, 더 나은 팀이 되어 함께 성장해 나갈 수 있도록 합니다.
        </p>
      </div>
      <button className="font">맞춤 회고 유형 알아보기</button>
    </Home1Wrap>
  );
}

const Home1Wrap = styled.div`
  height: 742px;
  //background 피그마 디자인 코드 안 맞음
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 39.37%,
    rgba(121, 205, 150, 0.3) 100%
  );
  padding-top: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;

  p {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    margin: 0;
  }
  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .title span {
    color: var(--primary-400, #79cd96);
  }
  .font {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  button {
    width: 289px;
    height: 53px;
    color: black;
    border: none;
    border-radius: 8px;
    background: var(--primary-400, #79cd96);
  }
`;