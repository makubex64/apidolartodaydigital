document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos(){
	

	const xhttp = new XMLHttpRequest();
	xhttp.open('GET','https://s3.amazonaws.com/dolartoday/data.json', true);
	xhttp.send();

	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			// console.log(this.responseText);
			let datos = JSON.parse(this.responseText);
			// console.log(datos);
			let resultado = document.querySelector('#respuesta');
			resultado.innerHTML = `
				<tr>
				<td>${datos.USD.dolartoday} BS </td>
				<td>${datos.USD.bitcoin_ref} BS </td>
				<td>${datos.EUR.transferencia} BS </td>
				<td>${datos._timestamp.fecha}</td>
				</tr>

				`


		}
	}
}