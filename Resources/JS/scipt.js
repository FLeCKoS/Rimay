document.getElementById("Imput_search").addEventListener("click", mostrar_buscador);
document.getElementById("body_r").addEventListener("click", ocultar_buscador);

boxsearch = document.getElementById("box_search");
imputsearch = document.getElementById("Imput_search");

function mostrar_buscador() {
    box_search.style.display = "block";


}

function ocultar_buscador() {
    box_search.style.display = "none";
}

document.getElementById("Imput_search").addEventListener("keyup", Buscar_filtro);

function Buscar_filtro() {
    filtro = Imput_search.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filtro) > -1) {
            li[i].style.display = "";
            box_search.style.display = "block";

            if (Imput_search.value === "") {
                box_search.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }
    }
}