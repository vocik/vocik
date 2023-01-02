<div>
  <button onClick="pridatDoVozu()">Přidat do vozu</button>
  <button onClick="pridatVse()">Přidat vše</button>
  <h1> Rozšiřujicí výbava </h1>
  <p id="rozsirujiciVybava">
  Klimatizace cena:8000<br>
  Palubní počítač cena:27000<br>
  Hill Hold Assisst cena:5000<br>
  Apple Car Play cena:6000<br>
  Android auto cena:5000<br>
  Manuální převodovka cena:15000<br>
  Webasto cena:25000<br>
  Vyhřívané čelní sklo cena:10000<br>
  Keyless system cena:18500<br>
  Tažné zařízení cena:12000<br>  
  </p>
</div>
<div>
  <button onclick="odebratZVozu()">Odebrat z vozu</button>
  <button onclick="odebratVse()">Odebrat vše</button>
  <h2> Zakoupená výbava </h2>

  <p id="pole">test</p>
</div>




div
{
  float:left;
  margin: 100px;
}





const poleProduktu = [
  { vybava: "Klimatizace", cena: 8000 },
  { vybava: "Palubní počítač", cena: 27000 },
  { vybava: "Hill Hold Assisst", cena: 5000 },
  { vybava: "Apple Car Play", cena: 6000},
  { vybava: "Android auto", cena: 5000},
  { vybava: "Manuální převodovka", cena: 15000 },
  { vybava: "Webasto", cena: 25000 },
  { vybava: "Vyhřívané čelní sklo", cena: 10000 },
  { vybava: "Keyless system", cena: 18500 },
  { vybava: "Tažné zařízení", cena: 12000},
  ];
const poleVypis = [];
var odpoved = "";
var odpoved_mala = "";

function pridatDoVozu(){
  odpoved = prompt("Co chcete přidat?")
  odpoved_mala = odpoved.toLowerCase()
  switch(odpoved_mala){
    case "klimatizace":
      poleVypis.push(poleProduktu[0]);
      console.log(poleVypis);
      break;
  }
}

function odebratZVozu(){
  odpoved = prompt("Co chcete přidat?")
  odpoved_mala = odpoved.toLowerCase()
}