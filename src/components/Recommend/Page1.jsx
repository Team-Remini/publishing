import React, { useState, useEffect } from "react";
import SelectWrap from "./SelectWrap";

export default function Page1({
  isChecked1,
  isChecked2,
  isChecked3,
  handleCheckboxChange,
}) {
  return (
    <SelectWrap>
      <h3 className="select_title">
        어떠한 상황에 대해 회고를 하고 싶은지 알려주세요
      </h3>
      <div className={`select_box ${isChecked1 ? "checked" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={() => handleCheckboxChange(1)}
          />
        </div>
        <p>일상을 돌아보기 위한 회고를 하고 싶어요</p>
      </div>
      <div className={`select_box ${isChecked2 ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleCheckboxChange(2)}
        />
        <p>목표를 평가하는 회고를 하고 싶어요</p>
      </div>
      <div className={`select_box ${isChecked3 ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked3}
          onChange={() => handleCheckboxChange(3)}
        />
        <p>프로젝트 관련 회고를 하고 싶어요</p>
      </div>
    </SelectWrap>
  );
}
