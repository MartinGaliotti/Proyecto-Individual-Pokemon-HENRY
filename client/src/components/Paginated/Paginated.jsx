import Styles from "./Paginated.module.css";
import { useSelector, useDispatch } from "react-redux";
import consts from "../../views/Home/consts";
import { changeActualPage } from "../../redux/actions";

const Paginated = () => {
  const dispatch = useDispatch();

  const { next, prev, number } = consts;

  const cantPages = useSelector((state) => state.cantPages);
  const actualPage = useSelector((state) => state.actualPage);

  const changePage = (event) => {
    // Función para cambiar la pagina
    const action = event.target.name;
    let aux = 0;
    switch (action) {
      case next:
        // Si la acción es aumentar
        if (actualPage < cantPages) {
          aux = actualPage + 1;
        }
        break;
      case prev:
        // Si la acción es decrementar
        if (actualPage > 0) {
          aux = actualPage - 1;
        }
        break;

      case number: // Si la accion es number
        const value = Number(event.target.value);
        aux = value;
        break;

      default:
        aux = actualPage;
        break;
    }
    dispatch(changeActualPage(aux));
  };

  const renderPages = () => {
    let buttons = [];
    for (let i = 0; i <= cantPages; i++) {
      if (i === actualPage) {
        buttons.push(
          <button
            className={Styles.numberButton}
            key={i}
            name={number}
            value={i}
            onClick={changePage}
          >
            {i + 1}
          </button>
        );
      } else {
        buttons.push(
          <button
            className={Styles.numberActualButton}
            key={i}
            name={number}
            value={i}
            onClick={changePage}
          >
            {i + 1}
          </button>
        );
      }
    }
    return buttons;
  };

  const render = () => {
    if (cantPages > 1) {
      return (
        <div className={Styles.container}>
          <button name={prev} onClick={changePage}>
            prev
          </button>
          {renderPages()}
          <button name={next} onClick={changePage}>
            next
          </button>
        </div>
      );
    }
  };

  return <>{render()}</>;
};

export default Paginated;
