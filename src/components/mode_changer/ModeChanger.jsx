import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./mode-changer.scss";

const ModeChanger = () => {
  return (
    <div className="mode-changer">
      <button className="mode-changer__btn">
        <FontAwesomeIcon icon={faMoon} className="mode-changer__icon" /> Dark
        mode
      </button>
    </div>
  );
};

export default ModeChanger;
