const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    const telefono = document.getElementById('telefono').value;

    const data = {
        firstName: nombre,
        lastName: apellido,
        password: contraseña,
        email: email,
        phoneNumber: telefono,
        area: "ABC123",
        roles: "user"
    };

    fetch('https://veraxapi.stackcode.io/api/createuser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            alert('Usuario registrado exitosamente');
            window.location.href = 'Formulario.html';
        } else {
            alert('Error al registrar usuario: ' + (data.message || 'Error desconocido'));
        }
    })
    .catch(error => {
        console.error('ERROR:', error);
        alert('Error al registrar al usuario');
    });
});



