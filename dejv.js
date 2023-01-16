<h1 id="nadpis">Počet přijatých studentů FPE od zadaného roku</h1>
<button id="zadat" onClick="zadat()">Zadat</button>
<input id="rok" placeholder="Zadejte počáteční rok">
<br>
<button id="odeslat" onClick="odeslat()">Odeslat</button>
<input id="cislo" type="number" placeholder="Zadejte číslo">
<br>
<button onClick="smazatPolozku()">Smazat položku</button>
<input id="polozka" placeholder="Číslo mazané položky">
<br>
<button onClick="spojnicovy()">Spojnicový</button>
<button onClick="sloupcovy()">Sloupcový</button>
<button onClick="prolnuty()">Prolnutý</button>
<div>
  <canvas id="platno" width="600" height="400"></canvas>
</div>
<button onClick="smazatData()">Vymazat data</button>
<button onClick="souhrn()">Souhrn let</button>
<p id="zdroj">Zdrojová čísla</p>
<p id="max">Maximum:</p>
<p id="min">Minimum:</p>
<p id="prumer">Průměrná hodnota je:</p>



#platno
{
  background: cyan;
  border: 4px solid black;
}



let pocatecni_rok = 0;
let rok_pocitani = 0;
let roky_hodnota = 0;
let roky =[];
let hodnoty =[];
let hodnoty_smazane = [];
let max = 0;
let min = 0;
//let prumer_pocet = 0;
let prumer = 0;
let prumer_final = 0;
let graf_select = 0;
//0 je sponicovy; 1 je sloupcovy; 2 je prolnuty

document.getElementById("odeslat").disabled=true;

function zadat(){
  pocatecni_rok = document.getElementById("rok").value;
  rok_pocitani = document.getElementById("rok").value;
     if (!(isNaN(pocatecni_rok)) && pocatecni_rok!="") {
       document.getElementById("nadpis").innerHTML="Počet přijatých studentů FPE od zadaného roku " + pocatecni_rok;
       document.getElementById("odeslat").disabled=false;
       document.getElementById("zadat").disabled=true;
  } else {
    alert ("Rok mohou být pouze čísla");
  }
}

function odeslat(){
  let hodnota = document.getElementById("cislo").value;
  if ((isNaN(hodnota)) || hodnota>400 || hodnota <0 || hodnota=="") {
    alert("Zadejte pltné hodnoty v rozmezí 0 - 400");
  } else {
    roky.push(rok_pocitani);
    hodnoty.push(hodnota);
    rok_pocitani++;
    max_min_souhrn();
    if(graf_select == 0){
      spojnicovy();
    }else if(graf_select == 1){
      sloupcovy();
    }else{
      prolnuty();
    }
  } 
}

function smazatPolozku(){
  
}

function spojnicovy(){
  graf_select = 0;
}

function sloupcovy(){
  graf_select = 1;
}

function prolnuty(){
  graf_select = 2;
}

function smazatData(){
  
}

function souhrn(){
  
}

function max_min_souhrn(){
  prumer = 0;
  min = 500000;
  max = 0;
  prumer_final = 0;
  
  min = Math.min(...hodnoty);
  max = Math.max(...hodnoty);
  for (let i = 0; i < hodnoty.length; i++) {
    prumer = parseInt(prumer) + parseInt(hodnoty[i]);
} 
  prumer_final = prumer / hodnoty.length;
  //console.log(min);
  //console.log(max);
  //console.log(prumer_final);
  document.getElementById("max").innerHTML="Maximum: " + max;
  document.getElementById("min").innerHTML="Minimum: " + min;
  document.getElementById("prumer").innerHTML="Průměrná hodnota je: " + prumer_final;
}
