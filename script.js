// Load the GPT-2 model
async function loadModel() {
    const model = await transformers.AutoModelForCausalLM.from_pretrained('gpt2');
    const tokenizer = await transformers.AutoTokenizer.from_pretrained('gpt2');
    return { model, tokenizer };
}

// Generate a response using the GPT-2 model
async function generateResponse(model, tokenizer, inputText) {
    const inputIds = tokenizer.encode(inputText, { return_tensors: 'tf' });
    const output = await model.generate(inputIds, {
        max_length: 50,
        num_return_sequences: 1,
    });
    const responseText = tokenizer.decode(output[0], { skip_special_tokens: true });
    return responseText;
}

// Handle user input
async function handleUserInput() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput.trim()) return;

    // Add user message to chat box
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="user-message">You: ${userInput}</div>`;

    // Clear input
    document.getElementById('user-input').value = '';

    // Generate AI response
    const { model, tokenizer } = await loadModel();
    const response = await generateResponse(model, tokenizer, userInput);

    // Add AI response to chat box
    chatBox.innerHTML += `<div class="ai-message">AI: ${response}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Event listener for send button
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Event listener for Enter key
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserInput();
});
