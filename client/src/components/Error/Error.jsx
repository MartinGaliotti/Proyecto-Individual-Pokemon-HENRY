import pathName from "../../helpers/PATHNAME.routes";
import { useNavigate } from "react-router-dom";

const Error = (props) => {
  const { text, error } = props; // Destructuring de Props
  const navigate = useNavigate();

  const handleClick = (event) => {
    // Dependiendo que boton llamo a la función
    const path = event.target.name;
    path === pathName.HOME
      ? navigate(path) // Redirige al home
      : (window.location.href = window.location.href); // Recarga la pagina
  };

  return (
    <div>
      <h1>
        {text}
        {error}
      </h1>
      <button name={pathName.HOME} onClick={handleClick}>
        Vover a la pagina principal
      </button>
      <button name="retry" onClick={handleClick}>
        Volver a intentar
      </button>
    </div>
  );
};

export default Error;
