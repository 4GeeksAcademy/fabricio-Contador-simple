import React from "react";
import "../../styles/hourglass.css";


const Hourglass = ({ seconds }) => {
 
  return (
    <div className="hourglass-wrap">
      <div className="hourglass-label">Reloj de arena</div>

      <div className="hg-shell" key={seconds}>
        <div className="hg-frame"></div>
        <div className="hg-top-sand"></div>
        <div className="hg-stream"></div>
        <div className="hg-bottom-sand"></div>
      </div>
    </div>
  );
};

export default Hourglass;