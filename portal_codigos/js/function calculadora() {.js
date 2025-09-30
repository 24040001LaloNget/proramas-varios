function calculadora() {
let expr = "";
const screen = document.getElementById('screen');

function press(v) {
  if (/[+\-*/.]$/.test(expr) && /[+\-*/.]/.test(v)) return; // evita duplicar operadores
  expr += v;
  screen.textContent = expr || "0";
}

function clearAll() {
  expr = "";
  screen.textContent = "0";
}

function equals() {
  if (!expr) return;
  try {
    const res = Function("return (" + expr + ")")();
    screen.textContent = Number.isFinite(res) ? res : "Error";
    expr = String(res);
  } catch {
    screen.textContent = "Error";
    expr = "";
  }
}

// Eventos
document.querySelectorAll('.k[data-k]').forEach(b => {
  b.addEventListener('click', () => press(b.dataset.k));
});
document.getElementById('clear').addEventListener('click', clearAll);
document.getElementById('equals').addEventListener('click', equals);
}