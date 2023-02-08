import { useState, useEffect } from "react";
import "./index.css";
export default () => {
  return (
    <div className="dao-list">
      <ul>
        <li>
          <div className="dao-item">Dao #1</div>
        </li>
        <li>
          <div className="dao-item">Dao #2</div>
        </li>
        <li>
          <div className="dao-item">Dao #3</div>
        </li>
        <li>
          <div className="dao-item">Dao #4</div>
        </li>
        <li>
          <div className="dao-item">Dao #5</div>
        </li>
        <li>
          <div className="dao-item">Dao #6</div>
        </li>
        <li>
          <div className="dao-item">Dao #7</div>
        </li>
      </ul>
    </div>
  );
};
