// JP - A quick tv/glitch effect

const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGlitch() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 10000; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const width = Math.random() * 1000 - 500;
    let height = 2;
    
    const glitchRand = Math.random() * 200;
    
    if(i % 2 === 0){
        ctx.fillStyle = `rgba(0, 0, 0, 1)`;
        ctx.save();
        ctx.translate(x + width / 2, y + height);
        ctx.rotate(Math.random() * 255);
        ctx.translate(-(x + width / 2), -(y + height));
        ctx.fillRect(x, y, width, height);
        ctx.restore();
    } else {
        ctx.fillStyle = `rgba(${glitchRand}, ${glitchRand}, ${glitchRand}, ${Math.random() / 2.0})`;
        ctx.fillRect(x, y, width, height);
    }
  }
}

drawGlitch();
setInterval(drawGlitch, 1000/2);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});