const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const regExpr = {
	firstname: /^[a-zA-Z]{4,}$/,
	surname: /^[a-zA-Z]{5,}$/,
	street: /^[a-zA-Z0-9]{5,}$/,
	housenumber: /^\+?(0|[1-9]\d*)$/,
	flatnumber: /\d+-?\d*/,
}

const field = {
	firstname: false,
	surname: false,
	date: false,
	street: false,
	housenumber: false,
	flatnumber: false,
}

const validarform = (e) => {
	switch (e.target.name) {
		case "firstname":
			fieldValidation(regExpr.firstname, e.target, 'firstname');
			break;
		case "surname":
			fieldValidation(regExpr.surname, e.target, 'surname');
			break;
		case "street":
			fieldValidation(regExpr.street, e.target, 'street');
			break;
		case "housenumber":
			fieldValidation(regExpr.housenumber, e.target, 'housenumber');
			break;
		case "flatnumber":
			fieldValidation(regExpr.flatnumber, e.target, 'flatnumber');
			break;
	}
}

let today = new Date();
today = new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0];
document.getElementById("deliverydate").setAttribute('min', today);




let checks = document.querySelectorAll(".gifts");
let max = 2;
for (var i = 0; i < checks.length; i++)
	checks[i].onclick = selectiveCheck;
function selectiveCheck(event) {
	var checkedChecks = document.querySelectorAll(".gifts:checked");
	if (checkedChecks.length >= max + 1)
		return false;
}



const fieldValidation = (expression, input, fieldname) => {
	if (expression.test(input.value)) {
		document.getElementById(`grupo__${fieldname}`).classList.remove('form__grupo-incorrecto');
		document.getElementById(`grupo__${fieldname}`).classList.add('form__grupo-correcto');
		document.querySelector(`#grupo__${fieldname} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${fieldname} .form__input-error`).classList.remove('form__input-error-activo');
		field[fieldname] = true;
		// document.getElementById('form__btn').disabled = false;
		// document.getElementById('form__btn').style.background = 'red';



	} else {
		document.getElementById(`grupo__${fieldname}`).classList.add('form__grupo-incorrecto');
		document.getElementById(`grupo__${fieldname}`).classList.remove('form__grupo-correcto');
		document.querySelector(`#grupo__${fieldname} .form__input-error`).classList.add('form__input-error-activo');
		field[fieldname] = false;
		// document.getElementById('form__btn').disabled = true;
		// document.getElementById('form__btn').style.background = 'blue';
	}


}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarform);
	input.addEventListener('blur', validarform);
});





form.addEventListener('submit', (e) => {
	e.preventDefault();

	if(field.firstname && field.surname && field.street && field.flatnumber && field.housenumber ){
		form.reset();

		document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form__grupo-correcto').forEach((icono) => {
			icono.classList.remove('form__grupo-correcto');
		});
	} else {
		document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
		setTimeout(() => {
			document.getElementById('form__mensaje').classList.remove('form__mensaje-activo');
		}, 5000);
	}
});


// function validar(fieldname) {
// 	if(field[fieldname] = true){
// 		// document.getElementById('form__btn').disabled = false;
// 		document.getElementById('form__btn').style.background = 'red';
// 	}else{
// 		// document.getElementById('form__btn').disabled = true;
// 		document.getElementById('form__btn').style.background = 'blue';
// 	}
// }