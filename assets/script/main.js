import { getCep } from "./modules/getCep.js";
import { homeGsap } from "./modules/animations/homeGsap.js";

document.addEventListener("DOMContentLoaded", () => {
    homeGsap();
});

const btn = document.getElementById('btn-cep');
const inputCep = document.getElementById('input-cep');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    getCep(inputCep);
})