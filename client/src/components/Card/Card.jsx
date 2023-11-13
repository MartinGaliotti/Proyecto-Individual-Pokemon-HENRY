import Styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import pathName from "../../helpers/PATHNAME.routes";

const Card = (props) => {
  const { name, image, types, id } = props; // Recibe los datos por props
  const navigate = useNavigate();

  const typesRender = () => {
    return (
      // Renderiza los tipos
      <div className={Styles.typesContainer}>
        {types.map((type, key) => {
          return (
            <div className={Styles.types} key={key}>
              {type}
            </div>
          );
        })}
      </div>
    );
  };

  const handleClick = () => {
    navigate(`${pathName.DETAIL}/${id}`);
  };

  const cardRender = () => {
    if (name && image && types) {
      return (
        <div onClick={handleClick} className={Styles.container}>
          <h1 className={Styles.name}>{name}</h1>
          <img src={image} alt="Imagen pokemon" className={Styles.image} />
          {typesRender()}
        </div>
      );
    }
  };

  return <>{cardRender()}</>;
};

export default Card;
