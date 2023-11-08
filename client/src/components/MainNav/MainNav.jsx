import SearchBar from "../SearchBar/SearchBar";
import BackToLanding from "../BackToLanding/BackToLanding";
import Config from "../Config/Config";

const MainNav = (props) => {
  const { setReload, setConfig } = props;

  return (
    <>
      <BackToLanding />
      <SearchBar setReload={setReload} />
      <Config setConfig={setConfig} />
    </>
  );
};

export default MainNav;
