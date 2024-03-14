import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./countries-search-input.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getCountriesByPartialName } from "../../utils/rest-countries-api-services";
import { useContext } from "react";
import { CountriesContext } from "../../context/CountriesContext";

const CountriesSearchInput = () => {
  const { setCountries } = useContext(CountriesContext);
  const handleInput = async (event) => {
    if (event.currentTarget.value == "") return;
    const countries = await getCountriesByPartialName(
      event.currentTarget.value
    );
    setCountries(countries);
  };
  return (
    <div className="countries-search-input__container">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="fa-2x magnifying-loop-icon"
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for a country..."
        onInput={handleInput}
      />
    </div>
  );
};

export default CountriesSearchInput;
