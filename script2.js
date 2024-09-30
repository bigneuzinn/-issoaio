var json1 = `{
    "NomeDaMusica": "Kenny G",
    "Lancamento": "Anos 2000",
    "imagem": "<img src='img/kenny g.jpg' width='200px' height='200px'>"
}`;

var json2 = `{
    "NomeDaMusica": "Anos Luz",
    "Lancamento": "2002",
    "imagem": "<img src='img/anosluz.jpg' width='200px'>"
}`;

var json3 = `{
    "NomeDaMusica": "M4",
    "Lancamento": "2002",
    "imagem": "<img src='img/m4.jpg' width='200px' height='200px'>"
}`;

var json4 = `{
    "NomeDaMusica": "A morte do autotune",
    "Lancamento": "2005",
    "imagem": "<img src='img/amortedoautotune.jpg' width='200px'>"
}`;

var json5 = `{
    "NomeDaMusica": "Quer Voar",
    "Lancamento": "2001",
    "imagem": "<img src='img/quervoar.jpg' width='200px' height='200px'>"
}`;

var json6 = `{
    "NomeDaMusica": "777-666",
    "Lancamento": "2000",
    "imagem": "<img src='img/777-666.jpg' width='200px' height='190px'>"
}`;

var data1 = JSON.parse(json1);
var data2 = JSON.parse(json2);
var data3 = JSON.parse(json3);
var data4 = JSON.parse(json4);
var data5 = JSON.parse(json5);
var data6 = JSON.parse(json6);

function Clique1() {
    document.getElementById('imagem').innerHTML = data1.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data1.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data1.Lancamento;
}

function Clique2() {
    document.getElementById('imagem').innerHTML = data2.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data2.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data2.Lancamento;
}

function Clique3() {
    document.getElementById('imagem').innerHTML = data3.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data3.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data3.Lancamento;
}

function Clique4() {
    document.getElementById('imagem').innerHTML = data4.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data4.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data4.Lancamento;
}

function Clique5() {
    document.getElementById('imagem').innerHTML = data5.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data5.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data5.Lancamento;
}

function Clique6() {
    document.getElementById('imagem').innerHTML = data6.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data6.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data6.Lancamento;
}