//obtiene los datos del formulario
const form=document.getElementById('form');
form.addEventListener('submit', (Event)=> {
    event.preventDefault();
    //obtiene los valores del formulario
    const nombre=document.getElementById('nombre')
    const apellido=document.getElementById('apellido')
    const email=document.getElementById('email')
    const contraseña=document.getElementById('contraseña')
    const telefono=document.getElementById('telefono')
//objetos con datos del formulario
    const data = {
        nombre,
        apellido,
        email,
        contraseña,
        telefono
};
fetch('https://veraxapi.stackcode.io/api/createuser',{//envía una solicitud POST a la URL
    method:'POST',//HTTP
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())//convierte la res en JSON
.then(data=> {
    //si se guardo exitosamente nos redirige a la pag del formulario
    if(data.success){
        alert('Usuario registrado exitosamente');
        window.location.href= 'Formulario.html';
    }else {
        // En caso de no ser exitoso nos muestra un mensaje de ERROR
        alert('Error al registrar usuario:' + data.message);
    }  
})//Se maneja cualquier error que nos resulte al registrar
.catch(error=> {
    console.error('ERROR:',error);
    alert('Error al registrar al usuario');
});

});


