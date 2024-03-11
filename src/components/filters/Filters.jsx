import CountriesSearchInput from "../countries_search_input/CountriesSearchInput";
import RegionFilter from "../region_filter/RegionFilter";
import "./filters.scss";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__container">
        <CountriesSearchInput />
        <RegionFilter />
      </div>
    </div>
  );
};

export default Filters;
