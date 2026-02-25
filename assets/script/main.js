import { getCep } from './modules/getCep.js';
import { getInfos } from './modules/getInfos.js';

const btn = document.querySelector('button');
const form = document.querySelector('form');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (getCep()) {
        form.send();
        getInfos();
    }
});