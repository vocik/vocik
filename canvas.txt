<h1>Canvas</h1>
<button onClick="vykreslit()">Vykreslit</button>
<div>
  <canvas id="platno" width="600" height="300"></canvas>
</div>



#platno
{
  background:MediumSeaGreen;
  border: 3px solid black;
}



var x = 20;
var y = 20;
var dx = 5;
var dy = 5;
var x2=550;

function vykreslit()
{
  let obsah=document.getElementById("platno").getContext("2d");
  
  //první
  /*obsah.beginPath();
  
  obsah.strokeStyle="blue";
  
  obsah.moveTo(30,30);
  obsah.lineTo(30,70);
  obsah.lineTo(70,70);
  //obsah.lineTo(70,30);
  //obsah.lineTo(30,30);
  
  obsah.closePath();
  obsah.stroke();
  */
  
  //DRUHÝ
  /*
  obsah.beginPath();
  obsah.rect(20,20,150,100);
  obsah.fillStyle="blue";
  obsah.fill();
  obsah.stroke();
  
  obsah.beginPath();
  obsah.rect(100,200,30,30);
  obsah.fillStyle="purple";
  obsah.fill();
  obsah.stroke();
  */
  
  //let x = 30;
  /*if( x<5 || x>569)
    {
      dx=-dx;
    }  
  
  x+=dx;
  x2+=-dx;
  
  obsah.beginPath();
  obsah.clearRect(0,0,600,300);
  obsah.rect(x,20,30,30); //xpozice,ypozice,xvelikoxt,yvelikost
  obsah.fillStyle="blue";
  obsah.fill();
  obsah.stroke();
  
  obsah.beginPath();
  obsah.rect(x2,250,30,30); //xpozice,ypozice,xvelikoxt,yvelikost
  obsah.fillStyle="red";
  obsah.fill();
  obsah.stroke();
  */
  
  //PÁTÝ
  
  if(x<5 || x>569)
    {
      dx=-dx;
    }
  
  if(y<5 || y>269)
    {
      dy=-dy;
    }
  
  x+=dx;
  y+=dy;
  
  obsah.beginPath()
 
  
  //obsah.clearRect(0,0,600,300);
  
  obsah.fillStyle = 'rgba(255,255,0,0.25)';
  obsah.fillRect(0,0,600,300);
  
  obsah.arc(x+15,y+15,15,0,2*Math.PI);
  obsah.fillStyle="#FF0000";
  obsah.fill();
  obsah.stroke();
  
}

setInterval(vykreslit,30);
