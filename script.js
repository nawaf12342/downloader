document.getElementById('correctButton').addEventListener('click', async () => {
  const inputText = document.getElementById('inputText').value;
  const outputText = document.getElementById('outputText');

  if (!inputText.trim()) {
    outputText.textContent = 'Please enter some text.';
    return;
  }

  try {
    const response = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `text=${encodeURIComponent(inputText)}&language=en-US`,
    });

    const data = await response.json();
    let correctedText = inputText;

    // Apply corrections to the text
    data.matches.forEach((match) => {
      const replacement = match.replacements[0]?.value || '';
      correctedText = correctedText.slice(0, match.offset) + replacement + correctedText.slice(match.offset + match.length);
    });

    outputText.textContent = correctedText;
  } catch (error) {
    outputText.textContent = 'An error occurred. Please try again.';
    console.error(error);
  }
});
