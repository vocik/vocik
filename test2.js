<div>
  <button onClick="pridatDoVozu()">Přidat do vozu</button>
  <button onClick="pridatVse()">Přidat vše</button>
  <h1>Rozšiřující výbava</h1>
  <p id="vypisJedna"></p>
</div>
<div>
  <button onClick="odebratZVozu()">Odebrat z vozu</button><button onClick="odebratVse()">Odebrat vše</button>
  <h1>Zakoupená výbava</h1>
  <input disabled placeholder="Kč"/ id="cenaCelkem">
  <p id="vypisDva"></p>
</div>



div
{
  float:left;
  margin: 10px;
}



let poleProduktu = [
  { name: "Klimatizace", price: 8000},
  { name: "Palubní počítač", price: 30000},
  { name: "Hill Hold Assisst", price: 5000},
  { name: "Apple Car Play", price: 6000},
  { name: "Android Auto", price: 5000},
  { name: "Manuální převodovka", price: 15000},
  { name: "Webasto", price: 25000},
  { name: "Vyhřívané čelní sklo", price: 10000},
  { name: "Keyless system", price: 18500 },
  { name: "Tažné zařízení", price: 12000 },
  ];

let zakoupenoPole = [];

function pridatDoVozu() {
  console.log(poleProduktu);
    if (poleProduktu.length == 0) {
        printAll();
        alert("Už máte všechno, co můžeme nabídnout!")
        printAll();
        console.log(poleProduktu);
        return;
    }
    let vyberSi = prompt("Co vám můžeme nabídnout?");
    const item = poleProduktu.find(item => item.name.toLowerCase() === vyberSi.toLowerCase());
    if (item) {
        zakoupenoPole.push(item);
        removeItem(poleProduktu, item);

    } else {
        alert("To bohužel nenabízíme, nebo už to máte");
    }
    while (true) {
        if (poleProduktu.length == 0) {
            alert("Už máte všechno")
            printAll();
            return;
        }
        let vyberuSiJeste = prompt("Co ještě nabídneme");
        if (vyberuSiJeste) {
            const itemJeste = poleProduktu.find(item => item.name.toLowerCase() === vyberuSiJeste.toLowerCase())
            if (itemJeste) {
                zakoupenoPole.push(itemJeste);
                removeItem(poleProduktu, itemJeste);
            } else {
                alert("To nenabízíme, nebo to máte");
            }
            printAll();
        } else {
            printAll();
            return;
        }
    }
  printAll();
}
function odebratZVozu() {
    if (zakoupenoPole.length == 0) {
        alert("Už nemáme nic víc co nabídnout")
        return;
    }
    let vyberSi = prompt("Co vám nabídnou?");
    const item = zakoupenoPole.find(item => item.name.toLowerCase() === vyberSi.toLowerCase());
    if (item) {
        poleProduktu.push(item);
        removeItem(zakoupenoPole, item);
        printAll();
    } else {
        alert("To bohužel nenabízíme, nebo už to máte");
    }
    while (true) {
        if (zakoupenoPole.length == 0) {
            alert("Už nemáte v autě žádnou příplatkovou výbavu")
            return;
        }
        let vyberuSiJeste = prompt("Co byste chtěli odebratZVozu?");
        if (vyberuSiJeste) {
            const itemJeste = zakoupenoPole.find(item => item.name.toLowerCase() === vyberuSiJeste.toLowerCase())
            if (itemJeste) {
                poleProduktu.push(itemJeste);
                removeItem(zakoupenoPole, itemJeste);
            } else {
                alert("To bohužel ve vozu nemáte");
            }
            printAll();
        } else {
            printAll();
            return;
        }
    }
}
function pridatDoVozuVse() {
    if (poleProduktu.length == 0) {
        alert("Už máte všechno, co můžeme nabídnout!")
        return;
    }
    zakoupenoPole = zakoupenoPole.concat(poleProduktu);
    poleProduktu = [];
    printAll();
};
function odebratZVozuVse() {
    if (zakoupenoPole.length == 0) {
        alert("Už nemáte v autě žádnou příplatkovou výbavu")
        return;
    }
    poleProduktu = poleProduktu.concat(zakoupenoPole);
    zakoupenoPole = [];
    printAll();
};
function printAll() {
    document.getElementById("vypisJedna").innerHTML = "";
    for (let item of poleProduktu) {
        document.getElementById("vypisJedna").innerHTML += item.name + " cena: " + item.price + " Kč <br>";
    }
    document.getElementById("vypisDva").innerHTML = "";
    for (let item of zakoupenoPole) {
        document.getElementById("vypisDva").innerHTML += item.name + " cena: " + item.price + " Kč <br>";
    }
    let castka = 0;
    for (let item of zakoupenoPole) {
        castka += item.price;
    }
    document.getElementById('cenaCelkem').value = castka + " Kč";
}
printAll();
function removeItem(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i--;
        }
    }
}
function odebratVse(){
  zakoupenoPole = [];
  poleProduktu = [
  { name: "Klimatizace", price: 8000},
  { name: "Palubní počítač", price: 30000},
  { name: "Hill Hold Assisst", price: 5000},
  { name: "Apple Car Play", price: 6000},
  { name: "Android Auto", price: 5000},
  { name: "Manuální převodovka", price: 15000},
  { name: "Webasto", price: 25000},
  { name: "Vyhřívané čelní sklo", price: 10000},
  { name: "Keyless system", price: 18500},
  { name: "Tažné zařízení", price: 12000},
  ];
  printAll();
}

function pridatVse(){
  zakoupenoPole = [
  { name: "Klimatizace", price: 8000  },
  { name: "Palubní počítač", price: 30000 },
  { name: "Hill Hold Assisst", price: 5000  },
  { name: "Apple Car Play", price: 6000  },
  { name: "Android Auto", price: 5000  },
  { name: "Manuální převodovka", price: 15000 },
  { name: "Webasto", price: 25000 },
  { name: "Vyhřívané čelní sklo", price: 10000},
  { name: "Keyless system", price: 18500 },
  { name: "Tažné zařízení", price: 12000 },
  ];
  poleProduktu = [];
  printAll();
}
