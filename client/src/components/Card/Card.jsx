import Styles from "./Card.module.css";

const Card = (props) => {
  const { name, image, types } = props; // Recibe los datos por props

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

  const cardRender = () => {
    if (name && image && types) {
      return (
        <div className={Styles.container}>
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
