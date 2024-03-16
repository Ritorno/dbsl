document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-link");

    filterLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const filter = this.getAttribute("data-filter");

            // Oculta todas las tarjetas
            const cards = document.querySelectorAll(".card");
            cards.forEach(function (card) {
                card.style.display = "none";
            });

            // Muestra solo la tarjeta del grupo seleccionado
            const selectedCard = document.getElementById("tarjeta1_" + filter);
            if (selectedCard) {
                selectedCard.style.display = "block";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-menu");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", function () {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-250px";
            document.body.style.marginLeft = "0";
            toggleButton.textContent = "☰"; // Cambia el contenido del botón a ☰ cuando se repliega el sidebar
        } else {
            sidebar.style.left = "0px";
            document.body.style.marginLeft = "250px"; // Ancho del menú desplegable
            toggleButton.textContent = "✕"; // Cambia el contenido del botón a ✕ cuando se despliega el sidebar
        }
    });
});

/*
function filtrar(clase) {
    var tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.classList.contains(clase)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}
*/


/*
function filtrar(clase) {
    var contenedor = document.getElementById('contenedor');
    var tarjetas = contenedor.getElementsByClassName('card');

    for (var i = 0; i < tarjetas.length; i++) {
        if (tarjetas[i].classList.contains(clase)) {
            tarjetas[i].style.order = '1';
        } else {
            tarjetas[i].style.order = '2';
        }
    }
}
*/


function filtrar(clase) {
    var tarjetas = document.querySelectorAll('.card');
    var contenedor = document.querySelector('.container');

    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.classList.contains(clase)) {
            contenedor.appendChild(tarjeta); // Mover la tarjeta al final del contenedor
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}



function restablecerFiltros() {
    var tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(function(tarjeta) {
        tarjeta.style.display = 'block'; // Mostrar todas las tarjetas
    });
}


/*
function restablecerFiltros() {
    var contenedor = document.getElementById('contenedor');
    var tarjetas = contenedor.getElementsByClassName('card');

    for (var i = 0; i < tarjetas.length; i++) {
        tarjetas[i].style.order = 'initial';
    }
}
*/

/*
// Variables globales para mantener el orden original de las tarjetas
var orderOriginal = {};

// Función para inicializar el orden original de las tarjetas
function inicializarOrdenOriginal() {
    var contenedor = document.getElementById('contenedor');
    var tarjetas = contenedor.getElementsByClassName('card');

    for (var i = 0; i < tarjetas.length; i++) {
        orderOriginal[tarjetas[i].id] = i + 1;
    }
}

// Función para filtrar las tarjetas y reordenarlas en función del filtro aplicado
function filtrar(clase) {
    var contenedor = document.getElementById('contenedor');
    var tarjetas = contenedor.getElementsByClassName('card');

    for (var i = 0; i < tarjetas.length; i++) {
        if (tarjetas[i].classList.contains(clase)) {
            contenedor.appendChild(tarjetas[i]);
            tarjetas[i].style.display = 'block';
        } else {
            tarjetas[i].style.display = 'none';
        }
    }
}

// Función para restablecer los filtros y devolver las tarjetas a su posición original
function restablecerFiltros() {
    var contenedor = document.getElementById('contenedor');
    var tarjetas = contenedor.getElementsByClassName('card');

    for (var i = 0; i < tarjetas.length; i++) {
        contenedor.insertBefore(tarjetas[i], contenedor.children[orderOriginal[tarjetas[i].id] - 1]);
        tarjetas[i].style.display = 'block';
    }
}

// Llamada a la función para inicializar el orden original al cargar la página
inicializarOrdenOriginal();
*/

/*
function filtrar(clase) {
    var tarjetas = document.querySelectorAll('.card');
    var contenedor = document.querySelector('.container');
    var fragmento = document.createDocumentFragment();

    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.classList.contains(clase)) {
            fragmento.appendChild(tarjeta.cloneNode(true)); // Mover una copia de la tarjeta al fragmento
            tarjeta.style.display = 'none'; // Ocultar la tarjeta original
        } else {
            tarjeta.style.display = 'none';
        }
    });

    contenedor.appendChild(fragmento); // Agregar el fragmento al final del contenedor
}
*/

/*
function filtrar(clase) {
    var contenedor = document.querySelector('.container');
    var tarjetas = contenedor.querySelectorAll('.card');

    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.classList.contains(clase)) {
            if (!tarjeta.parentNode.isEqualNode(contenedor)) {
                contenedor.appendChild(tarjeta); // Mover la tarjeta al final del contenedor solo si no está ya dentro
            }
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}
*/

/*
function filtrar(clase) {
    var contenedor = document.querySelector('.container');
    var tarjetas = contenedor.querySelectorAll('.card');

    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.classList.contains(clase)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}
*/

/*
function filtrar(clase) {
    var contenedor = document.querySelector('.container');
    var tarjetas = contenedor.querySelectorAll('.card');

    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.classList.contains(clase)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}
*/

