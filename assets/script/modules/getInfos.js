export function getInfos (resp) {
    const rua = document.getElementById('rua');
    const estado = document.getElementById('estado');
    const regiao = document.getElementById('regiao');
    const ddd = document.getElementById('ddd');

    if (!resp) return;
    rua.innerHTML = resp.logradouro;
    estado.innerHTML = resp.uf;
    regiao.innerHTML = resp.regiao;
    ddd.innerHTML = resp.ddd;   
}