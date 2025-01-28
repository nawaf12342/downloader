// Load MobileNet model
let model;
async function loadModel() {
    model = await mobilenet.load();
    console.log("Model loaded!");
}

// Classify the uploaded image
async function classifyImage(image) {
    const predictions = await model.classify(image);
    console.log(predictions);

    // Display the top prediction
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Prediction: <strong>${predictions[0].className}</strong> (${Math.round(predictions[0].probability * 100)}%)`;
}

// Handle image upload
document.getElementById('image-upload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.getElementById('preview');
            img.src = e.target.result;
            img.style.display = 'block';

            // Classify the image once it's loaded
            img.onload = () => classifyImage(img);
        };
        reader.readAsDataURL(file);
    }
});

// Load the model when the page loads
loadModel();
