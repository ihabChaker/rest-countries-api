import CountryCard from "../country_card/CountryCard";
import Filters from "../filters/Filters";
import "./countries-container.scss";
/* eslint-disable react/prop-types */
const CountriesContainer = ({ countries }) => {
  return (
    <>
      <Filters />
      <div className="countries">
        <div className="countries__container">
          {countries.length &&
            countries.map((country) => (
              <CountryCard country={country} key={country.name.common} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CountriesContainer;
