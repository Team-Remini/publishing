import React, { useState, useEffect } from "react";
import SelectWrap from "./SelectWrap";

export default function Page3b({
  isChecked1,
  isChecked2,

  handleCheckboxChange,
}) {
  return (
    <SelectWrap>
      <h3 className="select_title"> 프로젝트가 진행된 기간을 알려주세요</h3>
      <div className={`select_box ${isChecked1 ? "checked" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={() => handleCheckboxChange(1)}
          />
        </div>
        <p>한 달 이하</p>
      </div>
      <div className={`select_box ${isChecked2 ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleCheckboxChange(2)}
        />
        <p>분기 (3개월) 이상</p>
      </div>
    </SelectWrap>
  );
}
