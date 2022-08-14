let btnIncrementar = document.getElementById("incrementar");
let btnDecrementar = document.getElementById("decrementar");
let btnIniciar = document.getElementById("iniciar");

let texto = document.getElementById("texto");
let contador: number = 0;
const iniciar = (): void => {
  texto?.innerHTML = 0;
  contador = 0;
};
const incrementar = (): void => {
  contador = contador + 1;
  texto?.innerHTML = contador;
};
const decrementar = (): void => {
  contador = contador - 1;
  texto?.innerHTML = contador;
};
btnIncrementar?.addEventListener("click", incrementar);
btnDecrementar?.addEventListener("click", decrementar);
btnIniciar?.addEventListener("click", iniciar);
