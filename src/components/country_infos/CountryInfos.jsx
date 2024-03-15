/* eslint-disable react/prop-types */
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
import { Link, useParams, useNavigate } from "react-router-dom";
import "./country-infos.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  transformCapitalsArrayToString,
  transformCurrenciesObjectToString,
  transformLanguagesObjectToString,
} from "../../utils/countries-infos-utils";
import {
  getCountriesNamesByCodesArray,
  getCountryInfosByCode,
} from "../../utils/rest-countries-api-services";
import { useEffect, useState } from "react";
const CountryInfos = () => {
  const { countryCCA2Code } = useParams();
  const navigate = useNavigate();
  const handleGoingBack = () => {
    navigate(-1);
  };

  const [countryNames, setCountryNames] = useState([]);
  /** @type {CountryData} country */
  const [country, setcountry] = useState({});
  useEffect(() => {
    getCountryInfosByCode(countryCCA2Code)
      .then((data) => {
        setcountry({ ...data });
      })
      .catch(console.error);
  }, [countryCCA2Code]);

  useEffect(() => {
    if (country.borders) {
      getCountriesNamesByCodesArray(country.borders)
        .then(setCountryNames)
        .catch(console.error);
    }
  }, [country]);
  return (
    <div className="country-infos">
      {country.name ? (
        <div className="country-infos__container">
          <button onClick={handleGoingBack} className="country-infos__back-btn">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" /> Back
          </button>
          <div className="details">
            <div className="details__flag-container">
              <img src={country.flags.svg} alt={country.flags.alt} />
            </div>
            <div className="details__infos-container">
              <h1 className="details__common-name">{country.name.common}</h1>
              <div className="">
                <div className="details__columns-layout">
                  <div className="details__column">
                    <CountryDetail
                      label={"Native Name"}
                      detail={
                        country.name.nativeName[
                          Object.keys(country.languages)[0]
                        ].common
                      }
                    />
                    <CountryDetail
                      label={"Population"}
                      detail={country.population}
                    />
                    <CountryDetail label={"Region"} detail={country.region} />
                    <CountryDetail
                      label={"Sub Region"}
                      detail={country.subregion}
                    />
                    <CountryDetail
                      label={
                        country.capital.length == 1 ? "Capital" : "Capitals"
                      }
                      detail={transformCapitalsArrayToString(country.capital)}
                    />
                  </div>
                  <div className="details__column">
                    <CountryDetail
                      label={"Top Level Domain"}
                      detail={country.tld}
                    />
                    <CountryDetail
                      label={"Currencies"}
                      detail={transformCurrenciesObjectToString(
                        country.currencies
                      )}
                    />
                    <CountryDetail
                      label={"Languages"}
                      detail={transformLanguagesObjectToString(
                        country.languages
                      )}
                    />
                  </div>
                </div>
                <div className="details__border-countries">
                  <p>Border Countries: </p>
                  <div className="border-countries__container">
                    {countryNames.length == 1 &&
                    countryNames[0] == "There are no bordering countries" ? (
                      <p className="border-country">{countryNames[0]}</p>
                    ) : (
                      countryNames.map(({ name, cca2 }, index) => (
                        <BorderCountry
                          key={index}
                          name={name.common}
                          cca2={cca2}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
const BorderCountry = ({ name, cca2 }) => (
  <Link
    to={{ pathname: `/country/${cca2}` }}
    state={{ countryCCA2Code: cca2 }}
    className="border-country"
  >
    {name}
  </Link>
);
const CountryDetail = ({ label, detail }) => (
  <p>
    <span>{label}: </span>
    {detail}
  </p>
);
export default CountryInfos;
