document.getElementById("btn_descarga").addEventListener("click", (e) => {
    e.preventDefault()
    Swal.fire({
        title: "Gracias por confiar en nosotros!",
        text: "Se inicio el proceso descarga",
        icon: "success",
    });
});

document.getElementById("contacto").addEventListener('click', (e) => {
    e.preventDefault()
    Swal.fire({
        title: "Información de Contacto",
        html: '<p class="fs-4 text-muted text-left">Correo Electronico</p>' +
            '<p class="fs-4">fastpharm@gmail.com</p>' +
            '<p class="fs-4 text-muted text-left">Numero de Teléfono</p>' +
            '<p class="fs-4">+54 1234-5678</p>' +
            '<p class="fs-4 text-muted align-left">Dirección</p>' +
            '<p class="fs-4">Calle Real 1234</p>',
        icon: "info",
    });

})