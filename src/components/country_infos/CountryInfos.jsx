import { useLocation } from "react-router-dom";

const CountryInfos = () => {
  const location = useLocation();

  // const { country } = location;
  console.log(location.state);
  return <div>dasdsad </div>;
};

export default CountryInfos;
