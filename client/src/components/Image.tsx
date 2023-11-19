import findWaldo from "../assets/images/image-4.jpg";
import waldo from "../assets/images/waldo.jpeg";
import odlaw from "../assets/images/odlaw.png";
import wizard from "../assets/images/wizard.png";
import "../styles/App.css";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

function Image() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const [clickCoordinates, setClickCoordinates] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [characterName, setCharacterName] = useState("");
  const [response, setResponse] = useState<boolean>();

  const handleImageClick = (e: React.MouseEvent) => {
    if (characterName !== "") setResponse(false);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.x) / rect.width) * 100;
    const y = ((e.clientY - rect.y) / rect.width) * 100;

    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;

    showDropdown === true ? setShowDropdown(false) : setShowDropdown(true);
    setClickCoordinates({ x, y });
    setDropdownPosition({ top: top, left: left });
  };

  const handleCharacterClick = async (e: React.MouseEvent) => {
    const clickedCharacterName = e.currentTarget.textContent || "";
    setShowDropdown(false);
    setCharacterName(clickedCharacterName); // Set the clicked character's name in the context
    const data = {
      name: clickedCharacterName,
      x: clickCoordinates.x,
      y: clickCoordinates.y,
    };
    try {
      const response = await fetch("/position", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const actual = await response.json();
      console.log(actual);
      setResponse(actual);
      console.log(data);

      // if (actual === true) {
      //   setTimeout(() => {
      //     setResponse(false);
      //   }, 3000);
      // }
      if (response.status === 401) {
        throw new Error("Unauthorized");
      } else if (response.status === 500) {
        throw new Error("Invalid Content");
      } else if (!response.ok) {
        throw new Error("Something went wrong. Please try again");
      }
    } catch (err) {
      console.error(err);
    }
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
              <li onClick={handleCharacterClick}>Waldo</li>
              <li onClick={handleCharacterClick}>Odlaw</li>
              <li onClick={handleCharacterClick}>Wizard</li>
            </ul>
          )}
        </div>
        {response && <h1 className="result">Correct! It is {characterName}</h1>}
      </div>
    </>
  );
}

export default Image;
