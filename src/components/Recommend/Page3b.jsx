import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { isCheckedAtoms } from "../../atom";
import SelectWrap from "./SelectWrap";

export default function Page3b({ pd }) {
  const [isChecked] = useAtom(isCheckedAtoms);

  return (
    <SelectWrap>
      <h3 className="select_title"> 프로젝트가 진행된 기간을 알려주세요</h3>
      <div className={`select_box ${isChecked[0] ? "checked" : ""}`}>
        <div>
          <input
            type="checkbox"
            checked={isChecked[0]}
            onChange={() => pd(1)}
          />
        </div>
        <p>한 달 이하</p>
      </div>
      <div className={`select_box ${isChecked[1] ? "checked" : ""}`}>
        <input type="checkbox" checked={isChecked[1]} onChange={() => pd(2)} />
        <p>분기 (3개월) 이상</p>
      </div>
    </SelectWrap>
  );
}
