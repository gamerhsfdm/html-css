let listaDinamica = [];
let criarSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavras001 = {
       nome: "IRLANDA",
       categoria:  "LUGARES"
    },
    palavras002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
     },
     palavras003 = {
        nome: "CHILE",
        categoria:  "LUGARES"
     },
     palavras004 = {
         nome: "INDONESIA",
         categoria: "LUGARES"
      },
      palavras005 = {
        nome: "MALDIVAS",
        categoria:  "LUGARES"
     },
     palavras006 = {
         nome: "INGLATERRA",
         categoria: "LUGARES"
      },
      palavras007 = {
         nome: "GROELANDIA",
         categoria:  "LUGARES"
      },
      palavras008 = {
          nome: "UZBEQUISTAO",
          categoria: "LUGARES"
       },
       palavras009 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
     },
     palavras010 = {
        nome: "CREGUENHEM",
        categoria: "LUGARES"
     },
     palavras011={
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
     },
     palavras012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
     },
     palavras013 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
     },
     palavras014 = {
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
     },
     palavras015= {
        nome:"MOTOCICLETA",
        categoria:"TRANSPORTE"
     },
     palavras016 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
     },
     palavras017 = {
        nome: "AERONAVE",
        categoria: "TRANSPORTE"
     },
     palavras018 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
     },
     palavras019 = {
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
     },
     palavras020 = {
        nome: "FUNICULAR",
        categoria: "TRANSPORTE"
     },
     palavras021 = {
        nome: "XICARA",
        categoria: "OBJETOS"
     },
     palavras022 = {
        nome: "MOEDA",
        categoria: "OBJETOS"
     },
     palavras023 = {
        nome: "ESPARADRAPO",
        categoria: "OBJETOS"
     },
     palavras024 = {
        nome: "SINO",
        categoria: "OBJETOS"
     },
     palavras025 = {
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
     },
     palavras026 = {
        nome: "TAMBORETE",
        categoria: "OBJETOS"
     },
     palavras027 = {
        nome: "LAMPADA",
        categoria: "OBJETOS"
     },
     palavras028 = {
        nome: "BOCAL",
        categoria: "OBJETOS"
     },
     palavras029 = {
        nome: "CORTINA",
        categoria: "OBJETOS"
     },
     palavras030 = {
        nome: "LAPIS",
        categoria: "OBJETOS"
     },
     palavras031 = {
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
     },
     palavras032 = {
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
     },
     palavras033 = {
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
     },
     palavras034 = {
        nome: "GOROROBA",
        categoria: "ALIMENTOS"
     },
     palavras035 = {
        nome: "JANTAR",
        categoria: "ALIMENTOS"
     },
     palavras036 = {
        nome: "SABOROSO",
        categoria: "ALIMENTOS"
     },
     palavras037 = {
        nome: "DESJEJUM",
        categoria: "ALIMENTOS"
     },
     palavras038 = {
        nome: "MASTIGAR",
        categoria: "ALIMENTOS"
     },
     palavras039 = {
        nome: "ENGOLIR",
        categoria: "ALIMENTOS"
     },
     palavras040 = {
        nome: "DOCECRIA",
        categoria: "ALIMENTOS"
     },
     palavras041 = {
        nome: "DRAGAO",
        categoria: "ANIMAIS"
     },
     palavras042 = {
        nome: "GALINHA",
        categoria: "ANIMAIS"
     },
     palavras043 = {
        nome: "PAVAO",
        categoria: "ANIMAIS"
     },
     palavras044 = {
        nome: "CAMELO",
        categoria: "ANIMAIS"
     },
     palavras045 = {
        nome: "PERU",
        categoria: "ANIMAIS"
     },
     palavras046 = {
        nome: "ZEBRA",
        categoria: "ANIMAIS"
     },
     palavras047 = {
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
     },
     palavras048 = {
        nome: "CALANGO",
        categoria: "ANIMAIS"
     },
     palavras049 = {
        nome: "SAGUI",
        categoria: "ANIMAIS"
     },
     palavras050 = {
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
     },
];


criarPalavraSecreta();
function criarPalavraSecreta(){
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
  console.log(palavraSecretaSorteada)
  console.log(palavraSecretaCategoria)
}

montarPalavraNaTela()
function montarPalavraNaTela(){
   const categoria = document.getElementById("categoria");
   categoria.innerHTML = palavraSecretaCategoria

   const palavraTela = document.getElementById("palavra-secreta");
   palavraTela.innerHTML = "";

   for(i = 0; i < palavraSecretaSorteada.length; i++){
      if(listaDinamica[i] == undefined){
         listaDinamica[i] = "&nbsp;"
         palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] +"</div>"
      }
      else{
         palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] +"</div>"
      }
   }

}

function verificaLetraEscolhida(letra){
   mudarStyleLetra("tecla-" + letra);
}

function mudarStyleLetra(tecla){
   document.getElementById(tecla).style.background = "#C71585";
   document.getElementById(tecla).style.color = "#ffffff";
}