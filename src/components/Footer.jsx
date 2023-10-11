import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logoBlack from "../img/logo/logo_black.png";

export default function Footer() {
  return (
    <FooterWrap>
      <img src={logoBlack} alt="logo" />
      <p>Contact : Remini@ac.kr</p>
      <p>ⓒ Remini. All rights reserved.</p>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  height: 156px;
  box-sizing: border-box;
  padding: 40px 0;
  background-color: #121212;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 130px;
    height: 28px;
  }
  p {
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;
