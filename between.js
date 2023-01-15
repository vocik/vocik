<div>
  <h2>Uhádněte číslo - Zadejte rozsah čísel</h2>
</div>
<div>
  <div>
    <input id="spodni" type="text" placeholder="od">
    <input id="horni" type="text"  placeholder="do">
    <button onclick="nacteni_hodnot()">Potvrdit rozsah čísel</button>
  </div>
  <div>
    <input id="odhad" type="text" placeholder="odhad">
    <button onclick="tipovani_cisla()">Tipnout číslo</button>
  </div>
</div>
<div>
  <p id="output">Zde se zobrazí výsledek</p>
</div>



*{
  font-family: Calibri;
}
button, input{
  padding: 12px 24px;
  border-radius: 20px;
	font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}
input::placeholder{
  font-size: 18px;
  font-weight: 600;
}
button{
	background: #000000;
	cursor:pointer;
	color:#ffffff;
	font-weight:bold;
	text-decoration:none;
}
button:hover{
  opacity: 0.7;
}
#output{
  font-size:20px;
  font-weight: 400;
}



var cislo;
var pokus = 1;

function nacteni_hodnot() {
  let spodni = document.getElementById("spodni").value;
  let horni = document.getElementById("horni").value;
  
  if((!(isNaN(spodni))) && (!(isNaN(horni)))) {
    spodni = Number(spodni);
    horni = Number(horni);
    
    cislo = Math.floor(Math.random() * (horni - spodni + 1) + spodni);
    
    document.getElementById("output").innerHTML = cislo;
  } else {
    alert ("Zadejte cislo!");
  }
}

function tipovani_cisla() {
  let odhad = document.getElementById("odhad").value;
  let novyOdhad;
  
  if(!(isNaN(odhad))) {
    odhad = Number(odhad);
      
    if(odhad == cislo){
      alert("Uhodli jste číslo! Počet pokusů: " + pokus);
      pokus++;
    } else {
      
      while(odhad != cislo){
        
        if (odhad < cislo){
          novyOdhad = prompt(odhad + " je menší než zadané číslo", odhad);
          pokus++;
          
          if(novyOdhad == null){
            odhad = cislo;
            alert("Ukončuji hádání");
          } else {
            odhad = novyOdhad;
          }
          
        } 
        if (odhad > cislo){
          novyOdhad = prompt(odhad + " je větší než zadané číslo", odhad);
          pokus++;
          
          if(novyOdhad == null){
            odhad = cislo;
            alert("Ukončuji hádání");
          } else {
            odhad = novyOdhad;
          }
          
        }
        
        if (odhad === cislo){
          odhad = cislo;
          alert("Uhodli jste číslo! Počet pokusů: " + pokus);
        }
        
      }
      
    } 
    
  } else {
      alert ("Zadejte cislo!");
  }
  
}
