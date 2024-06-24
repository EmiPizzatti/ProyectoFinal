function Filtrar() {
	let input = document.getElementById("busqueda");
	input.value = input.value.toLowerCase();

	let contenedor = document.getElementsByClassName("searchHome");

	let hijos = contenedor.childNodes;

	let hayResultados = false;

	for (let i = 0; i < hijos.length; i++) {
		console.log(hijos[i].innerHTML)
		console.log(hijos[i])
		if (hijos[i].tagName == 'DIV') {
			if (hijos[i].innerHTML.toLowerCase().indexOf(input.value) > -1) {
				hayResultados = true;
				hijos[i].removeAttribute('style');
			} else {
				hijos[i].setAttribute('style', 'display:none');
			}
		}
	}
}