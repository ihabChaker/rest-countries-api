import { useState } from "react";
import { CountriesContext } from "../../context/CountriesContext";

// eslint-disable-next-line react/prop-types
const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  return (
    <CountriesContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
