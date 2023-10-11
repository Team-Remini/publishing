import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoBlack from "../img/logo/logo_black.png";

export default function Header() {
  return (
    <HeaderWrap>
      <img src={logoBlack} alt="logo" />
      <div className="text-box font">
        <p>회고하기</p>
        <p>둘러보기</p>
      </div>
      <div className="login font">
        <p>로그인</p>
      </div>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  height: 90px;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 280px; // 피그마 : 243px

  img {
    width: 162px;
    height: 39px;
  }
  .text-box {
    width: 186px;
    height: 21px;
    display: flex;
    gap: 60px;
    align-items: center;
  }

  .login {
    // HeaderWrap justify-content 비율 맞추려고 임시로 조정
    width: 162px;
    text-align: right;
  }

  .font {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
