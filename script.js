const whale = document.getElementById('whale');

// Function to move the whale
function moveWhale(event) {
    let x, y;

    // Check if it's a touch event
    if (event.touches) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
    } else {
        x = event.clientX;
        y = event.clientY;
    }

    // Smoothly move the whale to the cursor/finger position
    whale.style.left = `${x}px`;
    whale.style.top = `${y}px`;
}

// Add event listeners for both mouse and touch events
document.addEventListener('mousemove', moveWhale);
document.addEventListener('touchmove', moveWhale);
