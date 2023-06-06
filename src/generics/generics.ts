export const printObject = (argument: any) => {
  console.log(argument);
};

//---------------- FUNCIONES GENERICAS -----------
//Las funciones genericas son funciones que pueden recibir cualquier tipo de argumento y devolver un el mismo tipo de dato que recibio
/*Tanto en una funcion normal como en una funcion flecha debe declarar <T>(tambien puede ser cualquier letra)
para indicar que estamos trabajando con una funcion generica*/

//Funcion normal generica
export function genericFunction<T>(argument: T): T {
  return argument;
}

//Funcion flecha generica
export const genericFunctionArrow = <T>(argument: T): T => argument;
