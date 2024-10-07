var json1 = `{
    "NomeDaMusica": "Kenny G",
    "Desc": "A música 'Kenny G' do artista brasileiro Matuê é uma expressão do gênero trap que se destaca pela sua batida envolvente e letras que falam sobre sucesso, ostentação e autenticidade.",
    "Lancamento": "Anos 2000",
    "imagem": "<img src='img/kenny g.jpg' width='200px' height='200px'>"
}`;

var json2 = `{
    "NomeDaMusica": "Anos Luz",
    "Desc": "A música 'Anos Luz', do artista brasileiro Matuê, é uma composição que mistura elementos do trap com uma narrativa que evoca sensações de distanciamento e euforia.",
    "Lancamento": "2002",
    "imagem": "<img src='img/anosluz.jpg' width='200px'>"
}`;

var json3 = `{
    "NomeDaMusica": "M4",
    "Desc": "A música 'M4', uma colaboração entre Teto e Matuê, é um exemplo vibrante do gênero trap, que tem se popularizado no Brasil e no mundo.",
    "Lancamento": "2002",
    "imagem": "<img src='img/m4.jpg' width='200px' height='200px'>"
}`;

var json4 = `{
    "NomeDaMusica": "A morte do autotune",
    "Desc": " música 'A Morte do Autotune', do artista brasileiro Matuê, é uma composição que mergulha em temas introspectivos e pessoais, refletindo sobre a vida, a fama e as inseguranças do eu lírico.",
    "Lancamento": "2005",
    "imagem": "<img src='img/amortedoautotune.jpg' width='200px'>"
}`;

var json5 = `{
    "NomeDaMusica": "Quer Voar",
    "Desc": "A música 'Quer Voar', do rapper brasileiro Matuê, é um retrato da cultura do hip-hop contemporâneo, onde a ostentação e o estilo de vida luxuoso são temas recorrentes.",
    "Lancamento": "2001",
    "imagem": "<img src='img/quervoar.jpg' width='200px' height='200px'>"
}`;

var json6 = `{
    "NomeDaMusica": "777-666",
    "Desc": "A música '777-666' do artista brasileiro Matuê é uma viagem pelo universo do trap, gênero musical que mistura elementos do rap com batidas eletrônicas e temáticas muitas vezes relacionadas ao estilo de vida hedonista, drogas e reflexões existenciais.",
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
    document.getElementById('Desc').innerHTML = data1.Desc;
}

function Clique2() {
    document.getElementById('imagem').innerHTML = data2.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data2.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data2.Lancamento;
    document.getElementById('Desc').innerHTML = data2.Desc;
}

function Clique3() {
    document.getElementById('imagem').innerHTML = data3.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data3.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data3.Lancamento;
    document.getElementById('Desc').innerHTML = data3.Desc;
}

function Clique4() {
    document.getElementById('imagem').innerHTML = data4.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data4.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data4.Lancamento;
    document.getElementById('Desc').innerHTML = data4.Desc;
}

function Clique5() {
    document.getElementById('imagem').innerHTML = data5.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data5.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data5.Lancamento;
    document.getElementById('Desc').innerHTML = data5.Desc;
}

function Clique6() {
    document.getElementById('imagem').innerHTML = data6.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data6.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data6.Lancamento;
    document.getElementById('Desc').innerHTML = data6.Desc;
}