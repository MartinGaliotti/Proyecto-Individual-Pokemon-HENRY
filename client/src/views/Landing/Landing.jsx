import Styles from "./Landing.module.css";
import pathName from "../../helpers/PATHNAME.routes";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate(pathName.HOME);
  };
  return (
    <div className={Styles.container}>
      <button className={Styles.button} onClick={redirectHome}>
        HOME
      </button>
    </div>
  );
};

export default Landing;
