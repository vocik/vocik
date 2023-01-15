<div>
  <h1>Ovocné pole</h1>
  <div>
    <input id="cislo" type="number" placeholder="Číslo ovoce">
    <button onclick="vypisPozice()">Zobrazit ovoce</button>
  </div>
  <div>
    <input id="ovoce" type="text" placeholder="Ovoce na přidání">
    <button onclick="addOvoceStart()">Přidat na začátek</button>
    <button onclick="addOvoceKonec()">Přidat na konec</button>
  </div>
  <div>
    <input id="cisloSmazat" type="text" placeholder="Číslo ovoce na smazání">
    <button onclick="removeOvoceX()">Smazat záznam</button>
    <button onclick="removeOvoceStart()">Smazat první záznam</button>
    <button onclick="removeOvoceKonec()">Smazat poslední záznam</button>
  </div>
  <div class="output">
    <button onclick="vypis()">Vypiš celé pole</button>
    <p id="output">Zde se zobrazí výsledek</p>
  </div>
</div>



*{
  font-family: Calibri;
}
button, input{
  padding: 12px 24px;
	font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}
input::placeholder{
  font-size: 18px;
  font-weight: 600;
}
button{
	background: #ff7700;
	cursor:pointer;
	color:#ffffff;
  border: solid #ff7700;
	font-weight:bold;
	text-decoration:none;
}
button:hover{
  opacity: 0.8;
}
#output{
  margin-top: 10px;
  margin-left: 20px;
  font-size:20px;
  font-weight: 400;
}
.output *{
  display: inline;
}



const ovoce = ["Pomeranč", "Jablko", "Banán", "Rajče"];

// Hotovo
function vypisPozice(){
  let cislo = document.getElementById("cislo").value;
  document.getElementById("output").innerHTML = ovoce[cislo];
}

// Hotovo
function vypis(){
  document.getElementById("output").innerHTML = ovoce.join(", ");;
}

// Hotovo
function addOvoceKonec(){
  let noveOvoce = document.getElementById("ovoce").value;
  ovoce.push(noveOvoce);
}

// Hototo
function addOvoceStart(){
  let noveOvoce = document.getElementById("ovoce").value;
  ovoce.unshift(noveOvoce);
}

// Hotovo
function removeOvoceKonec(){
  ovoce = ovoce.pop();
}

// Hotovo
function removeOvoceStart(){
   ovoce = ovoce.shift();
}

// Hotovo
function removeOvoceX(){
  let cisloSmazat = document.getElementById("cisloSmazat").value;
  ovoce.splice(cisloSmazat, 1);
} 
