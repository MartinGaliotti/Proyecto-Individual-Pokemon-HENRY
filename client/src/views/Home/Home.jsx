import Styles from "./Home.module.css";
import MainNav from "../../components/MainNav/MainNav";
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllChars } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllChars()); // Cuando el componente se inicia se hace el dispach de todos los pokemons
  }, []);

  return (
    <div className={Styles.container}>
      <MainNav />
      <Cards />
    </div>
  );
};

export default Home;
