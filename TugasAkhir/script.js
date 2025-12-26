let result = document.getElementById("result");
let history = document.getElementById("history");
let isDeg = true;

/* BASIC */
function appendValue(val) {
    result.value += val;
}

function clearResult() {
    result.value = "";
    history.textContent = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

/* MODE */
function toggleMode() {
    isDeg = !isDeg;
    document.getElementById("mode").innerText = isDeg ? "DEG" : "RAD";
}

function toRad(x) {
    return isDeg ? x * Math.PI / 180 : x;
}

/* TRIG */
function sin() { result.value = Math.sin(toRad(+result.value)); }
function cos() { result.value = Math.cos(toRad(+result.value)); }
function tan() { result.value = Math.tan(toRad(+result.value)); }

/* SCIENTIFIC */
function squareRoot() {
    result.value = Math.sqrt(+result.value);
}

function square() {
    result.value = Math.pow(+result.value, 2);
}

function power() {
    result.value += "**";
}

function log() {
    result.value = Math.log10(+result.value);
}

function ln() {
    result.value = Math.log(+result.value);
}

function factorial() {
    let n = +result.value;
    if (n < 0) return result.value = "Error";
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    result.value = f;
}

/* CALCULATE */
function calculate() {
    try {
        let expr = result.value;
        let answer = Function("return " + expr)();
        history.textContent = expr + " =";
        result.value = answer;
    } catch {
        result.value = "Error";
    }
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", e => {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    }
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteLast();
});
