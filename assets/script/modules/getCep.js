import { getInfos } from "./getInfos.js";

export function getCep(inputCep) {

    const cepFormatado = inputCep.value.replace(/\D/g, '');

    axios.get(`https://viacep.com.br/ws/${cepFormatado}/json/`).then(json => {
        if (json.data.erro) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'CEP não encontrado',
            });
            return false;
        }
        getInfos(json.data);
        inputCep.value = '';
    }).catch(() => {
        const body = document.querySelector('body');
        body.style.display = '';
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'CEP não encontrado',
            scrollbarPadding: false,
            heightAuto: false
        });
    });
}