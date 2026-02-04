const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

function clamp(value) {
    return Math.max(0, Math.min(255, value));
}

function updateFromSliders() {
    redNum.value = red.value;
    greenNum.value = green.value;
    blueNum.value = blue.value;
    updateColor();
}

function updateFromInputs() {
    red.value = clamp(redNum.value);
    green.value = clamp(greenNum.value);
    blue.value = clamp(blueNum.value);
    updateColor();
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function updateColor() {
    const r = parseInt(red.value);
    const g = parseInt(green.value);
    const b = parseInt(blue.value);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    const hex = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexValue.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}

red.addEventListener("input", updateFromSliders);
green.addEventListener("input", updateFromSliders);
blue.addEventListener("input", updateFromSliders);

redNum.addEventListener("input", updateFromInputs);
greenNum.addEventListener("input", updateFromInputs);
blueNum.addEventListener("input", updateFromInputs);

colorPicker.addEventListener("input", () => {
    const { r, g, b } = hexToRgb(colorPicker.value);

    red.value = r;
    green.value = g;
    blue.value = b;

    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    updateColor();
});

// Inicializar
updateFromSliders();
