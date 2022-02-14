import { Button } from "@mui/material";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonOrder = () => {
  const { state, dispatch } = useContext(PokemonContext);
  const text = state.order === "asc" ? "Ascending" : "Descending";
  const changeOrderHandler = () => {
    dispatch({
      type: "SET_ORDER",
      payload: state.order === "asc" ? "desc" : "asc",
    });
  };
  return (
    <Button
      onClick={changeOrderHandler}
      style={{ margin: 15 }}
      variant="contained"
      color="primary"
    >
      {text}
    </Button>
  );
};

export default PokemonOrder;
