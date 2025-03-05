document.addEventListener("DOMContentLoaded", function () {
    const offcanvasElement = document.getElementById("offcanvas");
    const contenedorPrincipal = document.getElementById("contenedorPrincipal");

    offcanvasElement.addEventListener("show.bs.offcanvas", function () {
        contenedorPrincipal.classList.add("blur-background");
    });

    offcanvasElement.addEventListener("hidden.bs.offcanvas", function () {
        contenedorPrincipal.classList.remove("blur-background");
    });
});
