import FormStats from "../../components/FormStats/FormStats";
import FormTypes from "../../components/FormTypes/FormTypes";
import { formState } from "./consts";
import { useState } from "react";

const Create = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  const [form, setForm] = useState(formState.incomplete);

  const formRender = () => {
    if (form === formState.incomplete) {
      return <FormStats submit={setPokemon} setForm={setForm} />;
    } else if (form === formState.statsComplete) {
      return (
        <FormTypes submit={setPokemon} pokemon={pokemon} setForm={setForm} />
      );
    } else {
      return "Aca iria el form complete";
    }
  };

  return <>{formRender()}</>;
};

export default Create;
