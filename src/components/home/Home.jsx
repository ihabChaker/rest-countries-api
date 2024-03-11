import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { fetchCountries } from "../../utils/rest-countries-api-services";
import CountriesContainer from "../countries_container/CountriesContainer";
import Filters from "../filters/Filters";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchCountries().then((fetchedCountries) => {
      setCountries(fetchedCountries);
    });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Filters />
      <CountriesContainer countries={countries.slice(0, 8)} />
    </div>
  );
};
export default Home;
