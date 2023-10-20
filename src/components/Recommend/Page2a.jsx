import React, { useState, useEffect } from "react";
import SelectWrap from "./SelectWrap";

export default function Page2a({
  isChecked1,
  isChecked2,
  isChecked3,
  handleCheckboxChange,
}) {
  return (
    <SelectWrap>
      <h3 className="select_title">얼마 동안의 기간을 회고하고자 하나요? </h3>
      <div className={`select_box ${isChecked1 ? "checked" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={() => handleCheckboxChange(1)}
          />
        </div>
        <p>하루</p>
      </div>
      <div className={`select_box ${isChecked2 ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleCheckboxChange(2)}
        />
        <p>일주일</p>
      </div>
      <div className={`select_box ${isChecked3 ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked3}
          onChange={() => handleCheckboxChange(3)}
        />
        <p>한 달</p>
      </div>
    </SelectWrap>
  );
}