import findWaldo from "../assets/images/image-4.jpg";
import waldo from "../assets/images/waldo.jpeg";
import odlaw from "../assets/images/odlaw.png";
import wizard from "../assets/images/wizard.png";

import "../styles/App.css";

function Image() {
  const handleImageClick = (e: React.MouseEvent) => {
    console.log(e.target);
  };

  return (
    <>
      <h1>Where is Waldo?</h1>
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
        <img
          onClick={handleImageClick}
          className="waldo"
          src={findWaldo}
          alt="find-waldo"
        />
      </div>
    </>
  );
}

export default Image;
