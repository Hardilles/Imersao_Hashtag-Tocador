const botaoPlayPause = document.getElementById('play-pause');
const botaoAvançar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo')
const audioCapitulo = document.getElementById('audio-capitulo');


const numeroCapitulo = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');//acessa a clase do icone. remova a classe//
    botaoPlayPause.classList.add('bi-pause-circle-fill'); //adiciona a classe que troca o icone para pause//
        
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');//acessa a clase do icone. remova a classe//
    botaoPlayPause.classList.remove('bi-pause-circle-fill'); //adiciona a classe que troca o icone para pause//
}

function tocarOuPausar() {
    if(taTocando === 0){ //Se  o áudio não está sendo reproduzido, executa a função tocarFaixa()
        tocarFaixa(); //começa tocar//
        taTocando = 1; //muda o valor de taTocando para 1//
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = "Capitulo " + capituloAtual

}




function proximaFaixa () {
    if (capituloAtual === numeroCapitulo){
        capituloAtual = 1;
    } else{
        capituloAtual = capituloAtual + 1 //ou capituloAtual++;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa()
    taTocando = 1;
    trocarNomeFaixa();
}

function voltarFaixa () {
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulo;
    } else{
        capituloAtual = capituloAtual - 1
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa()
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar); //Adicione a este elemento (botão) a capacidade de ouvir um evento//
botaoAvançar.addEventListener('click',proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa)
