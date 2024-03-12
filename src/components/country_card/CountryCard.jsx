/* eslint-disable react/prop-types */
/**
 *
 * @typedef {object} CountryData
 * @property {object} name
 * @property {string} name.common
 * @property {string} name.nativeName
 * @property {object} flags
 * @property {string} flags.svg
 * @property {string} flags.png
 * @property {string} flags.alt
 * @property {number} population
 * @property {string} region
 * @property {string} subregion
 * @property {array} capital
 * @property {array} tld
 * @property {object} currencies
 * @property {object} languages
 * @property {string[]} borders
 */
/**
 * Represents a country card.
 * @param {Object} props - Component props.
 * @param {CountryData} props.country - Country data object.
 */

import { Link } from "react-router-dom";
import "./country-card.scss";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <div className="country-card__flag-container">
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <div className="country-card-infos">
        <div className="country-card-infos__container">
          <h2 className="country-card-infos__name">
            <Link to={{ pathname: "/country" }} state={country}>
              {country.name.common}
            </Link>
          </h2>
          <p className="country-card-infos__info">
            <span>Population</span> {country.population}
          </p>
          <p className="country-card-infos__info">
            <span>Region</span> {country.region}
          </p>
          <p className="country-card-infos__info">
            <span>Capital</span> {country.capital[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
