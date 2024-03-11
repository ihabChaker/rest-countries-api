import ModeChanger from "../mode_changer/ModeChanger";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">Where in the world?</p>
        <ModeChanger />
      </div>
    </header>
  );
};

export default Navbar;
