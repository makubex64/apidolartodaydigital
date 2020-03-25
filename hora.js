(function(){

	var actualizarHora = function(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			diaMes = fecha.getDate(),
			mes = fecha.getMonth(),
			año = fecha.getFullYear();

		//obtener mediantes variables los elementos del id del html...
		var pHoras = document.querySelector('#horas'),
			pAMPM =  document.querySelector('#ampm'),
			pMinutos = document.querySelector('#minutos'),
			pSegundos = document.querySelector('#segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDiaMes = document.querySelector('#diaMes'),
			pMes = document.querySelector('#mes'),
			pYear = document.querySelector('#year');

		// arreglo para los dias de las semanas
		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
			pDiaSemana.textContent = semana[diaSemana];

			pDiaMes.textContent = diaMes;
		// arreglo para los meses del año
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Novimbre', 'Diciembre'];
			pMes.textContent = meses[mes];
		// obtener el año
		    pYear.textContent = año;
		
		    if (horas >= 12) {
		    	horas = horas -  12;
		    	ampm = 'PM';
		    }else {
		    	ampm = 'AM';
		    }
			
			if (horas == 0) {
				horas = 12
			};

			pHoras.textContent = horas;
			pAMPM.textContent = ampm;

			if (minutos < 10) {minutos = "0" + minutos};
			if (segundos < 10) {segundos = "0" + segundos};
 
			pMinutos.textContent = minutos;
			pSegundos.textContent = segundos;

	};

	actualizarHora();

	var intervalo = setInterval(actualizarHora, 1000);

}());
