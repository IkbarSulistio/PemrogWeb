document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;

    if (nama === '') {
        alert('Nama harus diisi!');
        return;
    }

    if (email === '' || !validateEmail(email)) {
        alert('Email tidak valid!');
        return;
    }

    if (alamat === '') {
        alert('alamat harus diisi!');
        return;
    }

    alert('Registrasi berhasil!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
