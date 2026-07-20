const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function animate(){

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    for(let i=0;i<300;i++){

        const radius = i * 1.5;

        const px = x + Math.cos(angle + i * 0.1) * radius;
        const py = y + Math.sin(angle + i * 0.1) * radius;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);

        ctx.fillStyle = `hsl(${i + angle * 50},100%,50%)`;
        ctx.fill();
    }

    angle += 0.02;

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});