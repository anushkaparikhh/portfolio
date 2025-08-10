(() => {
    const canvas = document.getElementById('mossCanvas');
    const ctx = canvas.getContext('2d');
    const pixelSize = 5;
    const spreadChance = 0.001;
    const directions = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]];
    const colors = ['#7AA039', '#A1B340', '#B2DC50'];

    let width, height, gridWidth, gridHeight;
    let grid;
    let activePixels = [];
    let started = false; // Track if pixels started spreading

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        gridWidth = Math.floor(width / pixelSize);
        gridHeight = Math.floor(height / pixelSize);
        grid = Array(gridHeight).fill(null).map(() => Array(gridWidth).fill(false));
        activePixels = [];
        ctx.clearRect(0, 0, width, height);
        started = false; // Reset on resize
    }

    function drawPixel(x, y) {
        if (y >= gridHeight || x >= gridWidth || y < 0 || x < 0) return;
        if (grid[y][x]) return;
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        grid[y][x] = true;
        activePixels.push({x, y});
    }

    function spread() {
        const newPixels = [];
        activePixels.forEach(({x, y}) => {
            directions.forEach(([dx, dy]) => {
                const nx = x + dx;
                const ny = y + dy;
                if (
                    ny >= 0 && ny < gridHeight &&
                    nx >= 0 && nx < gridWidth &&
                    !grid[ny][nx] &&
                    Math.random() < spreadChance
                ) {
                    drawPixel(nx, ny);
                    newPixels.push({x: nx, y: ny});
                }
            });
        });
        activePixels.push(...newPixels);
    }

    function animate() {
        if (started) {
            spread();
        }
        requestAnimationFrame(animate);
    }

    canvas.addEventListener('mousemove', e => {
        const x = Math.floor(e.clientX / pixelSize);
        const y = Math.floor(e.clientY / pixelSize);
        if (!started) {
            drawPixel(x, y);  // Spawn initial pixel(s) at mouse
            started = true;
        } else {
            // Optional: spawn more pixels on mouse move
            // drawPixel(x, y);
        }
    });

    canvas.addEventListener('click', e => {
        const x = Math.floor(e.clientX / pixelSize);
        const y = Math.floor(e.clientY / pixelSize);
        drawPixel(x, y);
        started = true;
    });

    window.addEventListener('resize', resize);

    // Initialize
    resize();
    animate();
})();

  