const container = document.querySelector('.container');

// Generate 800 boxes
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            square.style.backgroundColor = 'rgb(29, 29, 29)'; // Revert to initial color
        }, 1000);
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
