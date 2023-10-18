import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../img/UI/Group 39571.svg";
import vector1 from "../../img/UI/Vector 257.svg";

export default function GoldenCircle() {
  return (
    <GoldenCircleWrap>
      <div className="title">
        <img src={logo} alt="logo" />팀 Remini의 Golden Circle
      </div>
      <div className="what">
        <div className="how">
          <div className="why"></div>
        </div>
      </div>
    </GoldenCircleWrap>
  );
}

const GoldenCircleWrap = styled.div`
  background: var(--Background, #121212);
  display: flex;
  height: 618px;
  padding: 100px 0px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  .title {
    height: 38px;
    color: var(--text-high-emphasis, rgba(255, 255, 255, 0.87));
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
    gap: 10px;
  }

  .what {
    width: 330px;
    height: 330px;
    flex-shrink: 0;
    border-radius: 330px;
    opacity: 0.5;
    background: var(--primary-800, #305d40);

    position: relative;
  }
  .how {
    width: 200px;
    height: 200px;
    flex-shrink: 0;
    background: var(--primary-600, #4b9f6b);
    border-radius: 330px;

    margin-top: 65px;
    margin-left: 65px;
    padding: 0.1px;
    z-index: 1;

    position: relative;
  }
  .why {
    width: 90px;
    height: 90px;
    flex-shrink: 0;
    background: var(--primary-400, #79cd96);
    border-radius: 330px;

    margin-top: 55px;
    margin-left: 55px;
    z-index: 2;

    position: relative;
  }

  span {
  }
`;
