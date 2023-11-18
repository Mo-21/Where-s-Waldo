import findWaldo from "../assets/images/image-4.jpg";
import waldo from "../assets/images/waldo.jpeg";
import odlaw from "../assets/images/odlaw.png";
import wizard from "../assets/images/wizard.png";
import "../styles/App.css";
import React, { MouseEvent, useState } from "react";

function Image() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [clickCoordinates, setClickCoordinates] = useState({ x: 0, y: 0 });

  const handleImageClick = (e: React.MouseEvent) => {
    showDropdown === true ? setShowDropdown(false) : setShowDropdown(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.x) / rect.width) * 100;
    const y = ((e.clientY - rect.y) / rect.width) * 100;

    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;

    console.log(`X:${x.toFixed(2)}%,Y: ${y.toFixed(2)}%`);
    console.log(`rect.x: ${e.clientX}`);
    setClickCoordinates({ x, y });
    setDropdownPosition({ top: top, left: left });
  };

  return (
    <>
      <h1 className="title">Where is Waldo?</h1>
      <div className="img-container">
        <div className="characters">
          <div className="waldo character-container">
            <img className="character" src={waldo} alt="waldo" />
            Waldo
          </div>
          <div className="odlaw character-container">
            <img className="character" src={odlaw} alt="odlaw" />
            Odlaw
          </div>
          <div className="wizard character-container">
            <img className="character" src={wizard} alt="wizard" />
            Wizard
          </div>
        </div>
        <div className="main-image-group">
          <img
            onClick={handleImageClick}
            className="waldo"
            src={findWaldo}
            alt="find-waldo"
          />
          {showDropdown && (
            <ul
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`,
              }}
              className="dropdown"
            >
              <li>Waldo?</li>
              <li>Odlaw?</li>
              <li>Wizard?</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Image;
