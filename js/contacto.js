document.getElementById("contacto").addEventListener('click', (e) => {
    e.preventDefault()
    Swal.fire({
        title: "Información de Contacto",
        html: '<p class="fs-4 text-muted"><i class="bi bi-envelope"></i> Correo Electronico </p>' +
            '<p class="fs-4">fastpharm@gmail.com</p>' +
            '<p class="fs-4 text-muted"><i class="bi bi-telephone"></i> Numero de Teléfono</p>' +
            '<p class="fs-4">+54 1234-5678</p>' +
            '<p class="fs-4 text-muted"><i class="bi bi-map"></i> Dirección</p>' +
            '<p class="fs-4">Calle Real 1234</p>',
        icon: "info",
    });
})