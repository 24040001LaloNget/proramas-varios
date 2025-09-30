const $ = (id) => document.getElementById(id);
const money = (n) => isFinite(n) ? n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' }) : '';

$('horasSemana').addEventListener('input', sugerirHoras);

function sugerirHoras() {
  const hs = parseFloat($('horasSemana').value);
  if (!isFinite(hs) || hs < 0) return;
  const normales = Math.min(hs, 40);
  const extras = Math.max(hs - 40, 0);
  if (!$('horasNormales').value) $('horasNormales').value = normales.toFixed(2);
  if (!$('horasExtras').value) $('horasExtras').value = extras.toFixed(2);
}

function calcularNomina() {
  const costo = parseFloat($('costoHora').value);
  const hn = parseFloat($('horasNormales').value);
  const he = parseFloat($('horasExtras').value);

  if (!isFinite(costo) || !isFinite(hn) || !isFinite(he)) {
    alert('Completa Costo por hora, Horas Normales y Horas Extras con números válidos.');
    return;
  }
  if (costo < 0 || hn < 0 || he < 0) {
    alert('Los valores no pueden ser negativos.');
    return;
  }

  const subtotal = (hn * costo) + (he * costo * 2);
  const ispt = subtotal * 0.10;
  const total = subtotal - ispt;

  $('subtotal').value = money(subtotal);
  $('ispt').value = money(ispt);
  $('montoPagar').value = money(total);
}

function limpiarNomina() {
  $('payrollForm').reset();
  $('subtotal').value = $('ispt').value = $('montoPagar').value = '';
}
