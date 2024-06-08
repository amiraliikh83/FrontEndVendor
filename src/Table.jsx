import React from "react";

const Table = () => {
  return (
    <div>
      <ul>
        <li className="active">
          <a href="/page1">یک<span>1</span></a>
        </li>
        <li className="active">
          <a href="/page2">دو<span>2</span></a>
        </li>
        <li className="active">
          <a href="/page3">سه<span>3</span></a>
        </li>
        <li className="active">
          <a href="/page4">چهار<span>4</span></a>
        </li>
        <li className="active">
          <a href="/page5">پنج<span>5</span></a>
        </li>
        <li className="active">
          <a href="/page6">شش<span>6</span></a>
        </li>
        <li className="active">
          <a href="/page7">هفت<span>7</span></a>
        </li>
        <li className="active">
          <a href="/page8">هشت<span>8</span></a>
        </li>
        <li className="active">
          <a href="/page9">نه<span>9</span></a>
        </li>
        <li className="active">
          <a href="/page10">ده<span>10</span></a>
        </li>
      </ul>
    </div>
  );
};

export default Table;
