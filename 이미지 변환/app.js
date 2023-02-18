const fileInput = document.getElementById('fileInput');
const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const rotateInput = document.getElementById('rotateInput');
const applyButton = document.getElementById('applyButton');
const resetButton = document.getElementById('resetButton');
const imagePreview = document.getElementById('imagePreview');

let image = null;

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            image = new Image();
            image.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
});

applyButton.addEventListener('click', () => {
    if (image) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = parseInt(widthInput.value);
        const height = parseInt(heightInput.value);
        const rotate = parseInt(rotateInput.value);
        const radian = rotate * Math.PI / 180;
        canvas.width = width;
        canvas.height = height;
        ctx.translate(width / 2, height / 2);
        ctx.rotate(radian);
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
        imagePreview.src = canvas.toDataURL();
    }
});

resetButton.addEventListener('click', () => {
    if (image) {
        widthInput.value = 200;
        heightInput.value = 200;
        rotateInput.value = 0;
        imagePreview.src = "";
        image = null;
        fileInput.value = "";
    }
});
