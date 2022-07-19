function relogio(){
    const data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    if (hora < 10) {
        hora = `0${hora}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (seg < 10) {
        seg = `0${seg}`;
    }

    const formatHora = `${hora}:${min}:${seg}`;
    document.getElementById("rel").value=formatHora;
}
    
    setInterval(relogio,1000);