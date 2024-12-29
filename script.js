document.getElementById('generateBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const asciiOutput = document.getElementById('asciiOutput');

    if (textInput.trim() !== "") {
        asciiOutput.style.display = 'block'; // Show the ASCII art container
        
        // Use figlet.js to convert the text into ASCII art
        figlet.text(textInput, { font: 'Standard' }, function(err, result) {
            if (err) {
                console.log('Something went wrong...', err);
                asciiOutput.textContent = 'Error generating ASCII Art.';
            } else {
                asciiOutput.textContent = result;
            }
        });
    } else {
        asciiOutput.style.display = 'none'; // Hide if the input is empty
    }
});
