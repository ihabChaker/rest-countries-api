import "./App.scss";
import { CountriesProvider, Home } from "./components";

const App = () => {
  return (
    <div className="app">
      <CountriesProvider>
        <Home />
      </CountriesProvider>
    </div>
  );
};

export default App;
