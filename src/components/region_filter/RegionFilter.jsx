import "./region-filter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { getCountriesByRegion } from "../../utils/rest-countries-api-services";
import { useState } from "react";

const RegionFilter = () => {
  const regions = [
    { displayName: "Asia", apiSearchName: "asia" },
    { displayName: "America", apiSearchName: "america" },
    { displayName: "Africa", apiSearchName: "africa" },
    { displayName: "Ocenia", apiSearchName: "ocenia" },
    { displayName: "Europe", apiSearchName: "europe" },
  ];
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="region-filter">
      <button
        className="region-filter__btn"
        onClick={() => {
          setIsExpanded((prevState) => !prevState);
        }}
      >
        Filter by Region
        <FontAwesomeIcon
          icon={isExpanded ? faCaretUp : faCaretDown}
          className="region-filter__icon"
        />
      </button>
      <div className="regions" hidden={!isExpanded}>
        <ul className="regions__list">
          {regions.map(({ displayName, apiSearchName }, index) => (
            <Region
              displayName={displayName}
              apiSearchName={apiSearchName}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
// eslint-disable-next-line react/prop-types
const Region = ({ displayName, apiSearchName }) => (
  <li className="region" onClick={getCountriesByRegion(apiSearchName)}>
    {displayName}
  </li>
);
export default RegionFilter;
