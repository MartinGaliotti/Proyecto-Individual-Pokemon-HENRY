import Styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={Styles.container}>
      <form className={Styles.form}>
        {/*  */}
        <div className={Styles.nameContainer}>
          <label htmlFor="name" className={Styles.label}>
            Name:
          </label>
          <input
            placeholder="Ingresar nombre..."
            type="text"
            name="name"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <div className={Styles.imageContainer}>
          <label htmlFor="image" className={Styles.label}>
            Imagen:
          </label>
          <input
            placeholder="Ingresar url de la imagen..."
            type="url"
            name="image"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <div className={Styles.hpContainer}>
          <label htmlFor="hp" className={Styles.label}>
            Vida:
          </label>
          <input
            max="255"
            min="1"
            step="1"
            type="range"
            name="hp"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <div className={Styles.attackContainer}>
          <label htmlFor="attack" className={Styles.label}>
            Ataque:
          </label>
          <input
            max="255"
            min="1"
            step="1"
            type="range"
            name="attack"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <div className={Styles.defenseContainer}>
          <label htmlFor="defense" className={Styles.label}>
            Defensa:
          </label>
          <input
            max="255"
            min="1"
            step="1"
            type="range"
            name="defense"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <div className={Styles.speedContainer}>
          <label htmlFor="speed" className={Styles.label}>
            Velocidad:
          </label>
          <input
            max="150"
            min="1"
            step="1"
            type="range"
            name="speed"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <div className={Styles.heightContainer}>
          <label htmlFor="height" className={Styles.label}>
            Altura:
          </label>
          <input
            max="50"
            min="0"
            step="0.1"
            type="range"
            name="height"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <div className={Styles.weightContainer}>
          <label htmlFor="weight" className={Styles.label}>
            Peso:
          </label>
          <input
            max="1000"
            min="0"
            step="1"
            type="range"
            name="weight"
            className={Styles.input}
          />
          <p className={Styles.error}></p>
        </div>
        {/*  */}
        <label htmlFor="weight" className={Styles.label}>
          Tipos:
        </label>
        {/*  */}
        <button className={Styles.submit}>CREAR</button>
        {/*  */}
      </form>
    </div>
  );
};

export default Form;
