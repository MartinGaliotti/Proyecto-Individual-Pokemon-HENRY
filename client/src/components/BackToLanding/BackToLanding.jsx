import Styles from "./BackToLanding.module.css";
import { useNavigate } from "react-router-dom";
import pathName from "../../helpers/PATHNAME.routes";

const BackToLanding = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pathName.LANDING); // Si se presiona el boton vuelva al Landing
  };

  return (
    <>
      <button className={Styles.button} onClick={handleClick}>
        Salir
      </button>
    </>
  );
};

export default BackToLanding;
