function relogio(){

    var img = document.getElementById('imagem');

    const espacoRelogio = document.querySelector(".relogio");

    const horaAgora = new Date (); 

    const horas = horaAgora.getHours(); 

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    //const formatoHora = horas.toString().padStart(2, "0");
    const formatoHora =13
    
    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector(".frase")

    dia = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");

    mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if (formatoHora >= 00 && formatoHora < 12){
        document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/ac/b7/6b/acb76b4e8dba42cad53d2e71fd179e37.gif)'

        img.src ="https://cdn-icons-png.flaticon.com/512/5370/5370251.png"

        document.body.style.color = 'red'
        document.body.style.backgroundSize = 'cover'
    }
    else if (formatoHora >= 12 && formatoHora < 18){
        document.body.style.color = 'black'
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundImage = 'url(https://gifs.eco.br/wp-content/uploads/2022/08/gifs-de-paisagens-naturais-14.gif)'

        img.src ="https://i.pinimg.com/originals/d8/dc/3a/d8dc3a2fd41076ec9e52eea65ac62da0.png"

    }
    else{
        document.body.style.backgroundImage = 'url(https://i.pinimg.com/originals/a6/ee/b9/a6eeb913b1781881536de8f4a2123079.gif)'
        document.body.style.color = 'white'
        document.body.style.backgroundSize = 'cover'

        img.src ="https://cdn.pixabay.com/photo/2018/06/25/23/04/sun-3498187_1280.png"
    }

 
}

setInterval(relogio,1000 )

