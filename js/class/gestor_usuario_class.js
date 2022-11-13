class Gestor {
    constructor() {
        this.usuarios = []
    }

    añadirUsuario(usuario) {
        this.usuarios.push(usuario)
        localStorage.setItem('usuarios', JSON.stringify(this.usuarios))
    }

    comprobarMail(mail) {
        return this.usuarios.some((usuario) => usuario.mail == mail)
    }

    cargarUsuarios() {
        this.usuarios = JSON.parse(localStorage.getItem('usuarios'))
        console.log(this.usuarios)
    }
}

export { Gestor }