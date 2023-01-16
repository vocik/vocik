let pocatecni_rok = 0;
let roky2 = 0;
let rok_pocitani = 0;
let roky_hodnota = 0;
let roky = [];
let hodnoty = [];
let hodnoty_smazane = [];
let max = 0;
let min = 0;
//let prumer_pocet = 0;
let prumer = 0;
let prumer_final = 0;
let graf_select = 0;
//0 je sponicovy; 1 je sloupcovy; 2 je prolnuty

document.getElementById("odeslat").disabled = true;

function zadat() {
  pocatecni_rok = document.getElementById("rok").value;
  rok_pocitani = document.getElementById("rok").value;
  roky2 = parseInt(document.getElementById("rok").value);
  if (!isNaN(pocatecni_rok) && pocatecni_rok != "") {
    document.getElementById("nadpis").innerHTML =
      "Počet přijatých studentů FPE od zadaného roku " + pocatecni_rok;
    document.getElementById("odeslat").disabled = false;
    document.getElementById("zadat").disabled = true;
  } else {
    alert("Rok mohou být pouze čísla");
  }
}

function odeslat() {
  let hodnota = parseInt(document.getElementById("cislo").value);
  if (isNaN(hodnota) || hodnota > 400 || hodnota < 0 || hodnota == "") {
    alert("Zadejte pltné hodnoty v rozmezí 0 - 400");
  } else {
    roky.push(rok_pocitani);
    hodnoty.push({
      value: hodnota,
      smazano: false
    });
    rok_pocitani++;
    max_min_souhrn();
    if (graf_select == 0) {
      spojnicovy();
    } else if (graf_select == 1) {
      sloupcovy();
    } else {
      prolnuty();
    }
  }
}

function smazatPolozku() {
  let index = parseInt(document.getElementById("polozka").value);
  index = index - 1;
  let hodnotyNeSmazane = hodnoty.filter((o) => !o.smazano);
  if (index >= hodnotyNeSmazane.length) {
    alert("Špatný index");
    return;
  }
  hodnotyNeSmazane[index].smazano = true;
  max_min_souhrn();
  if (graf_select == 0) {
    spojnicovy();
  } else if (graf_select == 1) {
    sloupcovy();
  } else {
    prolnuty();
  }
}

function spojnicovy() {
  graf_select = 0;
  let obsah=document.getElementById("platno").getContext("2d");
  let x=0;
  let x2=40;
  obsah.clearRect(0,0,600,400);
  for(let i=0;i<hodnoty.length;i++)
  {
    obsah.beginPath();
    obsah.moveTo(0,400);
    obsah.lineTo(x2,400-hodnoty[i].value);
    obsah.moveTo(x,400-hodnoty[i].value);
   
    obsah.strokeStyle="black";
    obsah.stroke();
    
    if(hodnoty[i].value==max)
    {
      obsah.beginPath();
      obsah.moveTo(x2,400-hodnoty[i].value);
      obsah.arc(x2,400-hodnoty[i].value,4,0,2*Math.PI);
      obsah.fillStyle="green";
      obsah.fill();
      obsah.strokeStyle="black";
      obsah.stroke();
    }
    else if(hodnoty[i].value==min)
    {
      obsah.beginPath();
      obsah.moveTo(x2,400-hodnoty[i].value);
      obsah.arc(x2,400-hodnoty[i].value,4,0,2*Math.PI);
      obsah.fillStyle="red";
      obsah.fill();
      obsah.strokeStyle="black";
      obsah.stroke();
    }
    else
    {
      obsah.beginPath();
      obsah.moveTo(x2,400-hodnoty[i].value);
      obsah.arc(x2,400-hodnoty[i].value,4,0,2*Math.PI);
      obsah.fillStyle="yellow";
      obsah.fill();
      obsah.strokeStyle="black";
      obsah.stroke();
    }
    x+=40;
    x2+=40;
  }
}

function sloupcovy() {
  graf_select = 1;
  let obsah = document.getElementById("platno").getContext("2d");
  let x = 10;
  obsah.clearRect(0, 0, 600, 400);
  max_min_souhrn();
  for (let i = 0; i < hodnoty.length; i++) {
    if (hodnoty[i].smazano) continue;
    if (max === hodnoty[i].value) {
      obsah.beginPath();
      obsah.rect(x, 400, 40, -hodnoty[i].value);
      obsah.fillStyle = "green";
      obsah.strokeStyle = "black";
      obsah.fill();
      obsah.stroke();
    } else if (min === hodnoty[i].value) {
      obsah.beginPath();
      obsah.rect(x, 400, 40, -hodnoty[i].value);
      obsah.fillStyle = "red";
      obsah.strokeStyle = "black";
      obsah.stroke();
      obsah.fill();
    } else {
      obsah.beginPath();
      obsah.rect(x, 400, 40, -hodnoty[i].value);
      obsah.fillStyle = "yellow";
      obsah.strokeStyle = "black";
      obsah.stroke();
      obsah.fill();
    }
    x += 41;
  }
}

function prolnuty() {
  graf_select = 2;
}

function smazatData() {
  let pocatecni_rok = 0;
  let rok_pocitani = 0;
  let roky_hodnota = 0;
  let roky = [];
  let hodnoty = [];
  let hodnoty_smazane = [];
  let max = 0;
  let min = 0;
  //let prumer_pocet = 0;
  let prumer = 0;
  let prumer_final = 0;
  let graf_select = 0;
}

function souhrn() {
  let text = "";
  roky2 = pocatecni_rok;

  for (let i = 0; i < hodnoty.length; i++) {
    text += roky2 + " --> " + hodnoty[i].value;
    if (hodnoty[i].smazano) {
      text += " !!!Smazáno!!!";
    }
    text += "\n";
    roky2++;
  }
  alert(text);
}

function max_min_souhrn() {
  prumer = 0;
  min = Infinity;
  max = -Infinity;
  prumer_final = 0;
  document.getElementById("zdroj").innerHTML = "Zdrojová čísla: ";
  for (let i = 0; i < hodnoty.length; i++) {
    if (!hodnoty[i].smazano) {
      let hod = hodnoty[i].value;
      prumer += hod;
      if (min > hod) min = hod;
      if (max < hod) max = hod;
      document.getElementById("zdroj").innerHTML += hod + " ";
    }
  }

  prumer_final = prumer / hodnoty.length;
  //console.log(min);
  //console.log(max);
  //console.log(prumer_final);
  document.getElementById("max").innerHTML = "Maximum: " + max;
  document.getElementById("min").innerHTML = "Minimum: " + min;
  document.getElementById("prumer").innerHTML =
    "Průměrná hodnota je: " + prumer_final;
}
