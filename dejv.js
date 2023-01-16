<h1 id="napis">Počet přijatých studentů FPE od zadaného roku</h1>
<button id="zadat" onClick="zadat()">Zadat</button>
<input id="rok" placeholder="Zadejte počáteční rok">
<br>
<button id="odeslat" onClick="odeslat()">Odeslat</button>
<input id="cislo" placeholder="Zadejte číslo">
<br>
<button onClick="smazat_polozku()">Smazat položku</button>
<input id="polozka" placeholder="Číslo mazané položky">
<br>
<button onClick="spojnicovy()">Spojnicový</button>
<button onClick="sloupovy()">Sloupový</button>
<button onClick="prolnuty()">Prolnutý</button>
<div>
  <canvas id="platno" width="600" height="400"></canvas>
</div>
<button onClick="smazat_data()">Vymazat data</button>
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




