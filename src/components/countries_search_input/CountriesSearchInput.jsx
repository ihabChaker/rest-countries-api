import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./countries-search-input.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CountriesSearchInput = () => {
  return (
    <div className="countries-search-input__container">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="fa-2x magnifying-loop-icon"
      />
      <input type="text" name="" id="" placeholder="Search for a country..." />
    </div>
  );
};

export default CountriesSearchInput;
