<div>
  <h1>Oko bere</h1>
  <button id="reset" onClick="reset()">Reset</button>
  <button id="odejit" onClick="odejit()">Odejít</button>
  <br>
  
  <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" placeholder="Sázka" id="sazka"/>

  <button id="vsadit" onClick="vsadit()">Vsadit</button>
  <br>
  <p id="penezenka"> </p>
  <canvas id = "canvas" width = "300" height = "150"></canvas>
  <br>
  <button id="jen_zamichat" onClick="jen_zamichat()">Jen zamíchat</button>
  <button id="prozkoumat_balicek" onClick="prozkoumat_balicek()">Prozkoumat balíček</button>
  <br>
  <p id="vypis"></p>
  
<script>
var input = document.getElementById("sazka");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("vsadit").click();
  }
});
</script>
</div>



#platno {
  background: blue;
  border: 3px solid;
  
}



var penize = 300;
var zamichano = false;
var sazka = 0;
var tah = true;
var opak = true;
var pocet_karet = 0;
var pocet_karet_bot = 0;
var hodnota = 0;
var srdce_value = 3;
var bot_rozhodovani = true;

var hodnota_bot = 0;
var karty_bot_vypis = [];

var karty_new = [];
var karty_bot = [];
var karty = [
  { karta: "žaludský svršek", hodnota: 1 },
  { karta: "červený svršek", hodnota: 1 },
  { karta: "zelený svršek", hodnota: 1 },
  { karta: "kulový svršek", hodnota: 1 },

  { karta: "žaludský spodek", hodnota: 1 },
  { karta: "červený spodek", hodnota: 1 },
  { karta: "zelený spodek", hodnota: 1 },
  { karta: "kulový spodek", hodnota: 1 },

  { karta: "žaludský král", hodnota: 2 },
  { karta: "červený král", hodnota: 2 },
  { karta: "zelený král", hodnota: 2 },
  { karta: "kulový král", hodnota: 2 },

  { karta: "žaludská sedmička", hodnota: 7 },
  { karta: "červená sedmička", hodnota: 7 },
  { karta: "zelená sedmička", hodnota: 7 },
  { karta: "kulová sedmička", hodnota: 7 },

  { karta: "žaludská osmička", hodnota: 8 },
  { karta: "červená osmička", hodnota: 8 },
  { karta: "zelená osmička", hodnota: 8 },
  { karta: "kulová osmička", hodnota: 8 },

  { karta: "žaludská devítka", hodnota: 9 },
  { karta: "červená devítka", hodnota: 9 },
  { karta: "zelená devítka", hodnota: 9 },
  { karta: "kulová devítka", hodnota: 9 },

  { karta: "žaludská desítka", hodnota: 10 },
  { karta: "červená desítka", hodnota: 10 },
  { karta: "zelená desítka", hodnota: 10 },
  { karta: "kulová desítka", hodnota: 10 },

  { karta: "žaludské eso", hodnota: 11 },
  { karta: "červené eso", hodnota: 11 },
  { karta: "zelené eso", hodnota: 11 },
  { karta: "kulové eso", hodnota: 11 }
];

document.getElementById("penezenka").innerHTML =
  "Zbývající peníze: " + penize + " Kč";
karty_new = karty;
srdce();
alert(
  "Cílem hry je dosáhnout kombinací karet vyššího součtu než bot protihráč. Tento součet však nesmí překročit hodnotu 21. Pokud se tak stane, automaticky kolo prohráváte \nSvršek a spodek mají hodnotu 1, král má hodnotu 2, karty 7 - 10 mají stejné hodnoty a eso má hodnotu 11 \nPřeji příjemnou hru, a ne že prohraješ všechny peníze"
);

function reset() {
  srdce_value = 3;
  srdce();
  zamichano = false;
  hodnota = 0;
  penize = 300;
  hodnota_bot = 0;
  zamichano = false;
  karty_new = [];
  karty_bot_vypis = [];
  pocet_karet_bot = 0;
  pocet_karet = 0;
  document.getElementById("odejit").disabled = false;
  document.getElementById("sazka").disabled = false;
  document.getElementById("vsadit").disabled = false;
  document.getElementById("jen_zamichat").disabled = false;
  document.getElementById("prozkoumat_balicek").disabled = false;
  document.getElementById("penezenka").innerHTML =
    "Zbývající peníze: " + penize + " Kč";
}

function odejit() {
  hodnota = 0;
  document.getElementById("odejit").disabled = true;
  document.getElementById("sazka").disabled = true;
  document.getElementById("vsadit").disabled = true;
  document.getElementById("jen_zamichat").disabled = true;
  document.getElementById("prozkoumat_balicek").disabled = true;
  document.getElementById("penezenka").innerHTML = "Zbývající peníze: 0 Kč";
  if (penize > 0) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    canvas.width = 300;
    canvas.height = 150;
    ctx.beginPath();
    alert("Odešel jsi s " + penize + " Kč");
  }
}

function vsadit() {
  if (zamichano == false) {
    alert("Nejdříve musíš zamíchat karty");
  } else {
    sazka = parseInt(document.getElementById("sazka").value);
    if (sazka < 1) {
      alert("Nelze vsadit 0 nebo záportné číslo");
    } else {
      if (sazka > penize) {
        alert("Nemáš dostatek peněz na vsazení");
      } else {
        penize -= sazka;
        console.log("Zbývající peníze: " + penize + " Kč");
        document.getElementById("penezenka").innerHTML =
          "Zbývající peníze: " + penize + " Kč";
        console.log("Zbývající peníze: " + penize + " Kč");

        while (opak == true) {
          hodnota += karty_new[pocet_karet].hodnota;
          bot();
          if (hodnota > 21) {
            break;
          }
          if (hodnota_bot > 21) {
            break;
          }
          tah = confirm(
            "Dostal jsi kartu " +
              karty_new[pocet_karet].karta +
              " s hodnotou " +
              karty_new[pocet_karet].hodnota +
              "\n" +
              "Tvá aktuální hodnota je: " +
              hodnota +
              "\n!Tlačítkem zrušit se zastavuje braní karet!"
          );
          pocet_karet++;
          if (tah == false) {
            opak = false;
            break;
          } else {
          }
          if (hodnota_bot == 21) {
            break;
          }
        }
        opak = true;
        sazka = parseInt(sazka);
        if (hodnota_bot == hodnota) {
          alert(
            "Nikdo nevyhrává, máte stejný počet bodů \nPočet bodů: " +
              hodnota +
              "\nBotovo karty: " +
              karty_bot_vypis.join(", ")
          );
          penize += sazka;
          document.getElementById("penezenka").innerHTML =
            "Zbývající peníze: " + penize + " Kč";
          hodnota = 0;
        } else if (hodnota_bot > 21) {
          alert(
            "Vyhrál jsi, bot dosáhl více jak 21 bodů takže prohrál \nBotovo karty: " +
              karty_bot_vypis.join(", ")
          );
          penize += sazka * 2;
          document.getElementById("penezenka").innerHTML =
            "Zbývající peníze: " + penize + " Kč";
          hodnota = 0;
        } else if (hodnota > 21) {
          alert(
            "Dosáhl jsi více jak 21 bodů, to znamená že jsi prohrál a bot vyhrál \nBotovo karty: " +
              karty_bot_vypis.join(", ")
          );
          document.getElementById("penezenka").innerHTML =
            "Zbývající peníze: " + penize + " Kč";
          hodnota = 0;
        } else if (hodnota > hodnota_bot) {
          alert(
            "Máš více bodů než bot, vyhráváš \n Botovo karty: " +
              karty_bot_vypis.join(", ")
          );
          penize += sazka * 2;
          document.getElementById("penezenka").innerHTML =
            "Zbývající peníze: " + penize + " Kč";
        } else if (hodnota < hodnota_bot)
          alert(
            "Máš méně bodů než bot, prohráváš \nBotovo karty: " +
              karty_bot_vypis.join(", ")
          );
      }
    }
  }
  if (penize < 1) {
    srdce_value--;
    srdce();
  }
  hodnota = 0;
  hodnota_bot = 0;
  zamichano = false;
  karty_bot_vypis = [];
  pocet_karet_bot = 0;
  pocet_karet = 0;
}

function jen_zamichat() {
  //karty_new = shuffle(karty);
  //karty_bot = shuffle(karty);
  karty_new = shuffle([...karty]);
  karty_bot = shuffle([...karty]);

  //karty_bot = shuffle(karty_bot)
  zamichano = true;
  console.log(karty_new);
  console.log(karty_bot);
}

//vezme to pole karet, který to rozbalí do jínýho pole. příklad:
//var pole2 = ["3", "4", "5"]
//var novePole = ["1", "2", "3", ...pole2];
//udělá to že v novePole budou itemy ["1", "2", "3", "3", "4", "5"]
//vpodstatě to insertne jedno pole do druhého
//spojí je to

//tak to vpodstatě udělá kopii toho pole
//z toho důvodu aby se neshufflovalo to původní pole

function prozkoumat_balicek() {
  let text = "";
  for (let i = 0; i < karty_new.length; i++) {
    text +=
      i +
      1 +
      ". karta: " +
      karty_new[i].karta +
      " " +
      karty_new[i].hodnota +
      "<br>";
  }
  document.getElementById("vypis").innerHTML = text;
}

function shuffle(karty) {
  return karty.sort(() => Math.random() - 0.5);
}

function srdce() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  canvas.width = 300;
  canvas.height = 150;
  if (srdce_value == 3) {
    ctx.beginPath();
    ctx.moveTo(37.5, 30);
    ctx.bezierCurveTo(37.5, 27, 30, 15, 15, 15);
    ctx.bezierCurveTo(7.5, 15, 7.5, 37.5, 7.5, 37.5);
    ctx.bezierCurveTo(7.5, 45, 15, 60, 37.5, 75);
    ctx.bezierCurveTo(60, 60, 67.5, 45, 67.5, 37.5);
    ctx.bezierCurveTo(67.5, 37.5, 67.5, 15, 52.5, 15);
    ctx.bezierCurveTo(45, 15, 37.5, 27, 37.5, 30);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(97.5, 30);
    ctx.bezierCurveTo(97.5, 27, 90, 15, 75, 15);
    ctx.bezierCurveTo(67.5, 15, 67.5, 37.5, 67.5, 37.5);
    ctx.bezierCurveTo(67.5, 45, 75, 60, 97.5, 75);
    ctx.bezierCurveTo(120, 60, 127.5, 45, 127.5, 37.5);
    ctx.bezierCurveTo(127.5, 37.5, 127.5, 15, 112.5, 15);
    ctx.bezierCurveTo(105, 15, 97.5, 27, 97.5, 30);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(157.5, 30);
    ctx.bezierCurveTo(157.5, 27, 150, 15, 135, 15);
    ctx.bezierCurveTo(127.5, 15, 127.5, 37.5, 127.5, 37.5);
    ctx.bezierCurveTo(127.5, 45, 135, 60, 157.5, 75);
    ctx.bezierCurveTo(180, 60, 187.5, 45, 187.5, 37.5);
    ctx.bezierCurveTo(187.5, 37.5, 187.5, 15, 172.5, 15);
    ctx.bezierCurveTo(165, 15, 157.5, 27, 157.5, 30);
    ctx.fillStyle = "red";
    ctx.fill();
  } else if (srdce_value == 2) {
    alert("Přišel jsi o jedno srdce");
    penize = 300;
    document.getElementById("penezenka").innerHTML =
      "Zbývající peníze: " + penize + " Kč";
    ctx.beginPath();
    ctx.moveTo(37.5, 30);
    ctx.bezierCurveTo(37.5, 27, 30, 15, 15, 15);
    ctx.bezierCurveTo(7.5, 15, 7.5, 37.5, 7.5, 37.5);
    ctx.bezierCurveTo(7.5, 45, 15, 60, 37.5, 75);
    ctx.bezierCurveTo(60, 60, 67.5, 45, 67.5, 37.5);
    ctx.bezierCurveTo(67.5, 37.5, 67.5, 15, 52.5, 15);
    ctx.bezierCurveTo(45, 15, 37.5, 27, 37.5, 30);
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(97.5, 30);
    ctx.bezierCurveTo(97.5, 27, 90, 15, 75, 15);
    ctx.bezierCurveTo(67.5, 15, 67.5, 37.5, 67.5, 37.5);
    ctx.bezierCurveTo(67.5, 45, 75, 60, 97.5, 75);
    ctx.bezierCurveTo(120, 60, 127.5, 45, 127.5, 37.5);
    ctx.bezierCurveTo(127.5, 37.5, 127.5, 15, 112.5, 15);
    ctx.bezierCurveTo(105, 15, 97.5, 27, 97.5, 30);
    ctx.fillStyle = "red";
    ctx.fill();
  } else if (srdce_value == 1) {
    alert("Přišel jsi o jedno srdce");
    penize = 300;
    document.getElementById("penezenka").innerHTML =
      "Zbývající peníze: " + penize + " Kč";
    ctx.beginPath();
    ctx.moveTo(37.5, 30);
    ctx.bezierCurveTo(37.5, 27, 30, 15, 15, 15);
    ctx.bezierCurveTo(7.5, 15, 7.5, 37.5, 7.5, 37.5);
    ctx.bezierCurveTo(7.5, 45, 15, 60, 37.5, 75);
    ctx.bezierCurveTo(60, 60, 67.5, 45, 67.5, 37.5);
    ctx.bezierCurveTo(67.5, 37.5, 67.5, 15, 52.5, 15);
    ctx.bezierCurveTo(45, 15, 37.5, 27, 37.5, 30);
    ctx.fillStyle = "red";
    ctx.fill();
  } else {
    ctx.beginPath();
    document.getElementById("penezenka").innerHTML = "Zbývající peníze: 0 Kč";
    alert("Došli ti životy, prohrál jsi");
    odejit();
  }
}

function bot() {
  if (hodnota_bot > 17) {
    if (Math.floor(Math.random() * 10) < 5) {
      if (bot_rozhodovani == true) {
        hodnota_bot += karty_bot[pocet_karet_bot].hodnota;
        karty_bot_vypis.push(karty_bot[pocet_karet_bot].karta);
        pocet_karet_bot++;
        bot_rozhodovani = false;
      }
    }
  } else {
    hodnota_bot += karty_bot[pocet_karet_bot].hodnota;
    karty_bot_vypis.push(karty_bot[pocet_karet_bot].karta);
    pocet_karet_bot++;
  }
}
