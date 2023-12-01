/*alert('oi');*/
/*function calcTotal(){
    var valo=parseInt(document.getElementById('tQant').value);
    tot=valo*120;
    document.getElementById('cTot').value=tot;
    console.log(valor)

}*/
function calcTotal(){
var qtd=parseInt(document.getElementById('cQuant').value);
var dia=parseInt(document.getElementById('cDia').value);
var alm=document.getElementById('cAlm').checked;
var jant=document.getElementById('cJant').checked;
   var tot=qtd*120*dia;
   /*var tot2=tot*dia;*/
   var totalRefeicoes=0;
    if(alm){
        totalRefeicoes += qtd*dia;
    }
    if(jant){
       totalRefeicoes +=qtd*dia;
    }

    var valorRefeicoes=totalRefeicoes*20;
    var valorFinal=tot+valorRefeicoes;


    document.getElementById('cTot').value=valorFinal;
}

// Verifica se o contador está armazenado no armazenamento local do navegador
if (localStorage.getItem('visitas')) {
    // Se o contador existir no armazenamento local, atualiza-o
    var contador = parseInt(localStorage.getItem('visitas'));
    contador++;
    localStorage.setItem('visitas', contador);
} else {
    // Se o contador não existir, inicia em 1
    localStorage.setItem('visitas', 1);
}

// Atualiza o valor do contador na página
document.getElementById('contador').textContent = localStorage.getItem('visitas');