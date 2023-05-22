import { NegociacaoController } from "./controllers/negociacao-controlles.js";
const controller = new NegociacaoController();
//adicionando a função adiciona do NegociacaoController ao form. Toda vez q eu submeter o form vou chamar o adiciona
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
    controller.adiciona();
});
