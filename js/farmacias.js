let farmaciasBtn = document.querySelectorAll('.btn-success')
let farmaciasNombres = document.querySelectorAll('.card-header')

farmaciasBtn.forEach((boton, index) => {
    boton.addEventListener('click', () => {

        Swal.fire({
            title: `Información de contacto de ${farmaciasNombres[index].innerHTML}`,
            html: '<p class="fs-4 text-muted"><i class="bi bi-envelope"></i> Correo Electronico </p>' +
                `<p class="fs-4">${farmaciasNombres[index].innerHTML.toLowerCase()}@gmail.com</p>` +
                '<p class="fs-4 text-muted"><i class="bi bi-telephone"></i> Numero de Teléfono</p>' +
                '<p class="fs-4">+54 1234-5678</p>' +
                '<p class="fs-4 text-muted"><i class="bi bi-map"></i> Dirección</p>' +
                '<p class="fs-4">Calle Real 1234</p>',
            icon: "info",
        });

    })
})