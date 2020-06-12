/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		console.log("Je suis prêt");
		// document.getElementById("app").innerHTML = "La page est chargée";
		window.app.appendChild(this.html_form());
	}
	static html_form() {
		var resultat = document.createElement("form");
		resultat.setAttribute("action", "");
		resultat.setAttribute("onsubmit", "return false;");
		resultat.setAttribute("method", "get");
		var div = resultat.appendChild(document.createElement("div"));
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "prenom");
		label.innerHTML = "Prénom"
		var input = div.appendChild(document.createElement("input"));
		input.setAttribute("type", "text");
		input.setAttribute("name", "prenom");
		input.setAttribute("id", "prenom");
		var div = resultat.appendChild(document.createElement("div"));
		var label = div.appendChild(document.createElement("label"));
		label.setAttribute("for", "nom");
		label.innerHTML = "Nom"
		var input = div.appendChild(document.createElement("input"));
		input.setAttribute("type", "text");
		input.setAttribute("name", "nom");
		input.setAttribute("id", "nom");
		var div = resultat.appendChild(document.createElement("div"));
		var input = div.appendChild(document.createElement("input"));
		input.setAttribute("type", "submit");
		return resultat;
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
