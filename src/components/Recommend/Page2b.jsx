import React, { useState, useEffect } from "react";
import SelectWrap from "./SelectWrap";

export default function Page2b({
  isChecked1,
  isChecked2,
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
        <p>분기 (3개월)</p>
      </div>
      <div className={`select_box ${isChecked2 ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleCheckboxChange(2)}
        />
        <p> 일 년</p>
      </div>
    </SelectWrap>
  );
}
