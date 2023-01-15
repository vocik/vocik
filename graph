<h1>Náhodný graf</h1>
<button onClick="vykreslit()">Spustit</button><br>
<canvas id="platno" width="600" height="300"></canvas>
<p id="vypis"></p>
<p id="max"></p>
<p id="min"></p>
<p id="prumer"></p>




#platno
{
  background:aqua;
  border: 3px dotted red;
}





function vykreslit()
{
  let pole=[];
  let soucet=0;
  
  for(let i = 0;i<14;i++)
    {
      pole[i]=Math.floor(Math.random()*(200-20+1)+20);
      soucet+=pole[i];
    }
  document.getElementById("vypis").innerHTML=pole.join("*");
  
  let min = Math.min(...pole);
  document.getElementById("min").innerHTML=min;
  
  let max = Math.max(...pole);
  document.getElementById("max").innerHTML=max;
  
  let prumer=soucet/pole.length;
  document.getElementById("prumer").innerHTML=prumer;
  
  let obsah=document.getElementById("platno").getContext("2d");
  let x=10;
  obsah.clearRect(0,0,600,300);
  for(let i=0;i<pole.length;i++)
    {
      if(max===pole[i])
        {
          obsah.beginPath();
          obsah.rect(x,300,40,-pole[i]);
          obsah.fillStyle="green";
          obsah.strokeStyle="black";
          obsah.fill();
          obsah.stroke();
              
        }
      else if (min===pole[i])
        {
          obsah.beginPath();
          obsah.rect(x,300,40,-pole[i]);
          obsah.fillStyle="red";
          obsah.strokeStyle="black";
          obsah.stroke();
          obsah.fill();
        }
      else
        {
          obsah.beginPath();
          obsah.rect(x,300,40,-pole[i]);
          obsah.fillStyle="yellow";
          obsah.strokeStyle="black";
          obsah.stroke();
          obsah.fill();
        }
      //x=x+40;
      x+=41;
    }  
  
  obsah.beginPath();
  obsah.rect(0,300-prumer,600,1);
  obsah.fillStyle="rgb(204,0,204)";
  obsah.strokeStyle="rgb(204,0,204)";
  obsah.fill();
  obsah.stroke();
}

//setInterval(vykreslit,200);
