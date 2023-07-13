const inputs = document.querySelectorAll('form input')
inputs.forEach(function(input){
    input.addEventListener('keydown',validarFormulario)
    input.addEventListener('blur',validarFormulario)
})

let validarCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
let validarNumeros = /^\d{1,10}$/
let validarLetras = /^[a-zA-ZÀ-ÿ\s]{1,40}$/



function validarFormulario(e) {
    switch(e.target.name){
        case 'nombre':
            if(validarLetras.test(e.target.value)){
                console.log('Campo válido')
                document.querySelector('#nombre').classList.add('correcto')
                document.querySelector('#nombre').classList.remove('incorrecto')

            }else {
                console.log('Campo inválido')
                document.querySelector('#nombre').classList.add('incorrecto')
                document.querySelector('#nombre').classList.remove('correcto')

            }
            break;
        case 'apellido':
            if(validarLetras.test(e.target.value)){
                console.log('Campo válido')
                document.querySelector('#apellido').classList.add('correcto')
                document.querySelector('#apellido').classList.remove('incorrecto')

            }else {
                console.log('Campo inválido')
                document.querySelector('#apellido').classList.add('incorrecto')
                document.querySelector('#apellido').classList.remove('correcto')
            }
            break;
        case 'telefono':
            if(validarNumeros.test(e.target.value)){
                console.log('Campo válido')
                document.querySelector('#telefono').classList.add('correcto')
                document.querySelector('#telefono').classList.remove('incorrecto')

            }else {
                console.log('Campo inválido')
                document.querySelector('#telefono').classList.add('incorrecto')
                document.querySelector('#telefono').classList.remove('correcto')
            }
            break;
        case 'correo':
            if(validarCorreo.test(e.target.value)){
                console.log('Campo válido')
                document.querySelector('#correo').classList.add('correcto')
                document.querySelector('#correo').classList.remove('incorrecto')

            }else {
                console.log('Campo inválido')
                document.querySelector('#correo').classList.add('incorrecto')
                document.querySelector('#correo').classList.remove('correcto')
            }
            break;
    }
}
// const personas = [
//     {nombre: 'Ana'},
//     {nombre: 'Luisa'},
//     {nombre: 'Beto'},
//     {nombre: 'Lucía'},
// ]

// const oficios = personas.map(function(oficio){
//     return oficio['nombre'] + ` is developer`
// })
// console.log(oficios)