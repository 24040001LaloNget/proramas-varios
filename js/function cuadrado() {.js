function cuadrado() {
  const v = parseFloat(document.getElementById('numCuadrado').value);
  const out = document.getElementById('outSquare');
  if (!isFinite(v)) {
    out.textContent = 'Resultado: ingresa un número válido.';
    return;
  }
  out.textContent = 'Resultado: ' + (v * v);
}
