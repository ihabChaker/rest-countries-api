import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { fetchCountries } from "../../utils/rest-countries-api-services";
import CountriesContainer from "../countries_container/CountriesContainer";
import Filters from "../filters/Filters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./home.scss";
import CountryInfos from "../country_infos/CountryInfos";
const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchCountries().then((fetchedCountries) => {
      setCountries(fetchedCountries);
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CountriesContainer countries={countries.slice(0, 8)} />,
    },
    {
      path: "country",
      element: <CountryInfos />,
    },
  ]);
  return (
    <div className="home">
      <Navbar />
      <Filters />
      <RouterProvider router={router} />
    </div>
  );
};
export default Home;
