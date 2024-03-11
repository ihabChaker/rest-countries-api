import ModeChanger from "../mode_changer/ModeChanger";

const Navbar = () => {
  return (
    <header className="header">
      <p className="header__logo">Where in the world</p>
      <ModeChanger />
    </header>
  );
};

export default Navbar;
