//AL import lo hacemos de la siguiente manera
import { Hero as superHero } from "./clases/Hero";
import { genericFunction, genericFunctionArrow } from "./generics/generics";
import { getPokemon } from "./generics/getPokemon";
//El as se usa para declarar un alias

/*
const Hero: string = "superman";

const iroman = new superHero("Tony Stark", 100, 40);

console.log(iroman);

//---------------- FUNCIONES GENERICAS -----------
//Las funciones genericas son funciones que pueden recibir cualquier tipo de argumento. Ver mas en "generics.ts"
console.log(genericFunction(3541.213).toFixed(2));
console.log(genericFunctionArrow("Lucas").toLocaleUpperCase());
console.log(genericFunction(new Date()).getDate());*/

//Practicando con la PokeApi
getPokemon(4)
  .then((pokemon) => console.log(pokemon))
  .catch((error) => console.error(error))
  .finally(() => console.log("Fin de la PokeApi"));
