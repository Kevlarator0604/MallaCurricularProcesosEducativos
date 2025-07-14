const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let points = [];
const spacing = 40; // espacio entre puntos

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  points = [];
  for (let x = 0; x < canvas.width; x += spacing) {
    for (let y = 0; y < canvas.height; y += spacing) {
      points.push({ x, y, originalX: x, originalY: y });
    }
  }
}
resize();

window.addEventListener('resize', resize);

canvas.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  points.forEach(point => {
    const dx = point.x - mouseX;
    const dy = point.y - mouseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 100) {
      const angle = Math.atan2(dy, dx);
      point.x += Math.cos(angle);
      point.y += Math.sin(angle);
    } else {
      // Regresa a la posición original suavemente
      point.x += (point.originalX - point.x) * 0.05;
      point.y += (point.originalY - point.y) * 0.05;
    }
  });
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0ff';

  points.forEach(point => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(draw);
}
draw();
