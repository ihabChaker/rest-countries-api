/**
 *
 * @typedef {object} CountryData
 * @property {object} name
 * @property {string} name.common
 * @property {object} name.nativeName
 * @property {object} flags
 * @property {string} flags.svg
 * @property {string} flags.png
 * @property {string} flags.alt
 * @property {number} population
 * @property {string} region
 * @property {string} subregion
 * @property {string[]} capital
 * @property {string[]} tld
 * @property {object} currencies
 * @property {object} languages
 * @property {string[]} borders
 */
import { useLocation, useNavigate } from "react-router-dom";
import "./country-infos.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  transformCapitalsArrayToString,
  transformCurrenciesObjectToString,
  transformLanguagesObjectToString,
} from "../../utils/countries-infos-utils";

const CountryInfos = () => {
  const location = useLocation();
  const country = /** @type {CountryData} */ (location.state);
  const navigate = useNavigate();
  const handleGoingBack = () => {
    navigate(-1);
  };
  return (
    <div className="country-infos">
      <div className="country-infos__container">
        <button onClick={handleGoingBack} className="country-infos__back-btn">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <div className="details">
          <div className="details__flag-container">
            <img src={country.flags.svg} alt={country.flags.alt} />
          </div>
          <div className="details__infos-container">
            <h1 className="details__common-name">{country.name.common}</h1>
            <div className="details__columns-layout">
              <div className="details__column">
                <p>
                  <span>Native Name: </span>
                  {
                    country.name.nativeName[Object.keys(country.languages)[0]]
                      .common
                  }
                </p>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>
                    {country.capital.length == 1 ? "Capital" : "Capitals"}:{" "}
                  </span>
                  {transformCapitalsArrayToString(country.capital)}
                </p>
              </div>
              <div className="details__column">
                <p>
                  <span>Top Level Domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span>Currencies: </span>
                  {transformCurrenciesObjectToString(country.currencies)}
                </p>
                <p>
                  <span>Languages: </span>
                  {transformLanguagesObjectToString(country.languages)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfos;
