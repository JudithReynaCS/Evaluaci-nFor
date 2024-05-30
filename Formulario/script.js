const form=document.getElementById('form');
form.addEventListener('submit', (Event)=> {
    event.preventDefault();
    const nombre=document.getElementById('nombre')
    const apellido=document.getElementById('apellido')
    const email=document.getElementById('email')
    const contraseña=document.getElementById('contraseña')
    const telefono=document.getElementById('telefono')

    const data = {
        nombre,
        apellido,
        email,
        contraseña,
        telefono
};
fetch('https://veraxapi.stackcode.io/api/createuser',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data=> {
    if(data.success){
        alert('Usuario registrado exitosamente');
        window.location.href= 'Formulario.html';
    }else {
        alert('Error al registrar usuario:' + data.message);
    }  
})
.catch(error=> {
    console.error('ERROR:',error);
    alert('Error al registrar al usuario');
});

});


