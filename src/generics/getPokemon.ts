import axios from "axios";
import { Pokemon } from "../interfaces/pokeInterface";

export const getPokemon = async (pokeID: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokeID}`
  );

  return data;
};
