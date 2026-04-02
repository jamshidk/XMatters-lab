const form = document.getElementById('beam-form');
const output = document.getElementById('result');
const modulusField = document.getElementById('modulus');

function formatSI(value) {
  return new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 6,
  }).format(value);
}

function solveDeflection({ beamType, L, P, E, I }) {
  if (beamType === 'cantilever-end') {
    return (P * L ** 3) / (3 * E * I);
  }

  // simply supported with center point load
  return (P * L ** 3) / (48 * E * I);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const beamType = document.getElementById('beamType').value;
  const L = Number(document.getElementById('length').value);
  const P = Number(document.getElementById('load').value);
  const E = Number(modulusField.value);
  const I = Number(document.getElementById('inertia').value);

  if ([L, P, E, I].some((n) => !Number.isFinite(n) || n <= 0)) {
    output.textContent = 'Please enter positive numeric values for all fields.';
    return;
  }

  const delta = solveDeflection({ beamType, L, P, E, I });
  const ratio = L / delta;

  output.innerHTML = `
    <strong>Estimated max deflection:</strong> ${formatSI(delta)} m<br>
    <strong>Deflection ratio:</strong> L/${formatSI(ratio)}
  `;
});

document.querySelectorAll('.materials button').forEach((button) => {
  button.addEventListener('click', () => {
    modulusField.value = button.dataset.e;
    modulusField.focus();
  });
});
