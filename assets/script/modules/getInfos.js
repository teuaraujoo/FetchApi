export function getInfos(json) {
    const rua = document.getElementById('rua');
    const estado = document.getElementById('estado');
    const regiao = document.getElementById('regiao');
    const ddd = document.getElementById('ddd');

    rua.innerHTML = json.logradouro;
    estado.innerHTML = json.estado;
    regiao.innerHTML = json.regiao;
    ddd.innerHTML = json.ddd;
}