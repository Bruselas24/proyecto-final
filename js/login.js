import { Gestor } from './class/gestor_usuario_class.js'
import { Usuario } from './class/usuario_class.js'

let gestor = new Gestor()

document.getElementById('crearCuenta').addEventListener('click', (e) => {
    e.preventDefault()

    let nombre = document.getElementById('nombre').value
    let mail = document.getElementById('mail').value
    let contraseña = document.getElementById('contraseña').value

    if (!nombre || !mail || !contraseña) {
        Swal.fire({
            title: 'Rellene todos los campos',
            icon: 'error'
        })
        return
    }

    if (gestor.comprobarMail(mail)) {
        Swal.fire({
            title: 'Ya existe un usuario con ese mail',
            icon: 'error'
        })
        return
    }

    let nuevoUsuario = new Usuario(nombre, mail, contraseña)
    gestor.añadirUsuario(nuevoUsuario)

    let temp = {
        logged: true,
        user: nombre
    }

    sessionStorage.setItem('logged', JSON.stringify(temp))

    Swal.fire({
        title: 'Se creo la cuenta exitosamente',
        icon: 'success'
    }).then(() => {
        window.location.href = "../index.html";
    })

    document.querySelector('form').reset()
})