import { getInfos } from './getInfos.js';

export function getCep() {
    const input = document.getElementById("input-cep");
    
    const cepFormatado = input.value.replace(/\D/g, '');
    axios.get(`viacep.com.br/ws/${cepFormatado}/json/`).then(json => {
        return json.data;
    }).then((resp) => {
        getInfos(resp);
    })
    
    .catch(() => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'CEP inválido',
        })
    });
};
