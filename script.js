
const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

canvas.width=innerWidth;

canvas.height=innerHeight;

let stars=[];

for(let i=0;i<350;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

a:Math.random()

});

}

let t=0;

function drawStars(){

ctx.fillStyle="rgba(0,0,0,.15)";

ctx.fillRect(0,0,canvas.width,canvas.height);

stars.forEach(s=>{

ctx.beginPath();

ctx.fillStyle="rgba(255,255,255,"+(0.2+Math.sin(t+s.x)*0.5)+")";

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fill();

});

}

function heart(x,y,size,color){

ctx.save();

ctx.translate(x,y);

ctx.scale(size,size);

ctx.beginPath();

ctx.moveTo(0,-3);

ctx.bezierCurveTo(5,-15,20,-5,0,15);

ctx.bezierCurveTo(-20,-5,-5,-15,0,-3);

ctx.fillStyle=color;

ctx.shadowBlur=20;

ctx.shadowColor=color;

ctx.fill();

ctx.restore();

}

function animate(){

drawStars();

let cx=canvas.width/2;

let cy=canvas.height/2;

for(let i=0;i<500;i++){

let angle=i*0.12+t;

let r=10+i*.4;

let x=cx+Math.sin(angle)*r;

let y=cy+Math.cos(angle)*r;

let hue=(i+t*100)%360;

heart(x,y,.08,`hsl(${hue},100%,60%)`);

}

t+=.02;

requestAnimationFrame(animate);

}

animate();

const text="💕 Every heartbeat whispers your name.";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}

}

type();

setInterval(()=>{

let h=document.createElement("div");

h.className="heart";

h.innerHTML=["❤️","💕","💖","💘","💝"][Math.floor(Math.random()*5)];

h.style.left=Math.random()*100+"vw";

h.style.fontSize=20+Math.random()*35+"px";

h.style.animationDuration=5+Math.random()*6+"s";

document.body.appendChild(h);

setTimeout(()=>h.remove(),12000);

},250);

document.getElementById("open").onclick=()=>{

document.getElementById("loveLetter").style.display="block";

}

document.getElementById("close").onclick=()=>{

document.getElementById("loveLetter").style.display="none";

}

window.onresize=()=>{

canvas.width=innerWidth;

canvas.height=innerHeight;

}