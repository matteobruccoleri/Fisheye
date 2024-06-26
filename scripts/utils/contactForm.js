// DOM Elements
const modal = document.getElementById("contact_modal");
const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const textarea = document.getElementById("message");

// Regex (expression régulière)
const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/g;
const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// Message d'erreur des inputs
const message = {
	name: "Ce champ doit contenir minimum 2 caractères.",
	name2: "Ce champ ne doit pas contenir de caractères spéciaux.",
	email: "Veuillez renseigner une adresse email.",
	email2: "Veuillez renseigner une adresse email valide.",
	textarea: "Ce champ doit contenir un message."
};

// Ajoute l'erreur
function addError (element, message) {
	element.parentElement.setAttribute("data-error-visible", "true");
	element.parentElement.setAttribute("data-error", message);
	if (first || last || email) {
		element.style.border = "2.5px solid #e54858";
	}
}

// Enlève l'erreur
function removeError (element) {
	element.parentElement.removeAttribute("data-error-visible");
	element.parentElement.removeAttribute("data-error");
	if (first || last || email) {
		element.style.border = "none";
	}
}

// Vérifie first
function checkFirst (first, message) {
	if (first.value.length < 2) {
		addError(first, message.name);
		return false;
	}
	if (!first.value.match(regexName)) {
		addError(first, message.name2);
		return false;
	} else {
		removeError(first);
	}
	return true;
}

// Vérifie last
function checkLast (last, message) {
	if (last.value.length < 2) {
		addError(last, message.name);
		return false;
	}
	if (!last.value.match(regexName)) {
		addError(last, message.name2);
		return false;
	} else {
		removeError(last);
	}
	return true;
}

// Vérifie email
function checkEmail (email, message) {
	if (!email.value) {
		addError(email, message.email);
		return false;
	}
	if (!email.value.match(regexEmail)) {
		addError(email, message.email2);
		return false;
	} else {
		removeError(email);
	}
	return true;
}

// Vérifie Textareea
function checkTextarea (textarea, message) {
	if (textarea.value.length < 1) {
		addError(textarea, message.textarea);
		return false;
	} else {
		removeError(textarea);
	}
	return true;
}

// Ajoute un évenement aux inputs du formulaire
first.addEventListener("change", () => { checkFirst(first, message); });
last.addEventListener("change", () => { checkLast(last, message); });
email.addEventListener("change", () => { checkEmail(email, message); });
textarea.addEventListener("change", () => { checkTextarea(textarea, message); });

// Ajoute un évenement au submit du formulaire
form.addEventListener("submit", (event) => {
	event.preventDefault();

	const isCheckedfirst = checkFirst(first, message);
	const isChecklast = checkLast(last, message);
	const isCheckedEmail = checkEmail(email, message);
	const isCheckTextarea = checkTextarea(textarea, message);

	if (isCheckedfirst && isChecklast && isCheckedEmail && isCheckTextarea) {
		// console.log(value);
		console.log("Prénom :", first.value);
		console.log("Nom :", last.value);
		console.log("Email :", email.value);
		console.log("Message :", textarea.value);
		modal.style.display = "none";
		form.reset();
	}
});
