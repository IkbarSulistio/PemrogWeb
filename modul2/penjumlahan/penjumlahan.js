document.getElementById('hitungBtn').addEventListener('click', jumlahkan);
document.getElementById('resetBtn').addEventListener('click', reset);

function jumlahkan() {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);

    const hasil = angka1 + angka2;

    document.getElementById('hasil').textContent = hasil;
}

function reset() {
    document.getElementById('angka1').value = '';
    document.getElementById('angka2').value = '';
    document.getElementById('hasil').textContent = '0';
}
