import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Recommend() {
  return (
    <div>
      <Header />
      <RecommendWrap>
        <div className="recommend_title">맞춤 회고 유형 추천</div>
        <div></div>
      </RecommendWrap>
    </div>
  );
}

const RecommendWrap = styled.div`
  .login_text {
  }
`;
