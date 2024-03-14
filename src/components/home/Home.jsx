import { useContext, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { fetchCountries } from "../../utils/rest-countries-api-services";
import CountriesContainer from "../countries_container/CountriesContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CountryInfos from "../country_infos/CountryInfos";
import { CountriesContext } from "../../context/CountriesContext";
import "./home.scss";
const Home = () => {
  const { countries, setCountries } = useContext(CountriesContext);

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
      <RouterProvider router={router} />
    </div>
  );
};
export default Home;
