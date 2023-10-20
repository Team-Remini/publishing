import React, { useState, useEffect } from "react";
import SelectWrap from "./SelectWrap";

export default function Page2c({
  isChecked1,
  isChecked2,

  handleCheckboxChange,
}) {
  return (
    <SelectWrap>
      <h3 className="select_title">프로젝트 진행 여부를 알려주세요 </h3>
      <div className={`select_box ${isChecked1 ? "checked" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={() => handleCheckboxChange(1)}
          />
        </div>
        <p>프로젝트를 진행 중이에요</p>
      </div>
      <div className={`select_box ${isChecked2 ? "checked" : ""}`}>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={() => handleCheckboxChange(2)}
        />
        <p>프로젝트를 마무리했어요</p>
      </div>
    </SelectWrap>
  );
}
