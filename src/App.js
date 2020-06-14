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
		var taillesPizza = {
			s: "Small",
			m: "Medium",
			l: "Large",
			xl: "Extra Large",
			j: "Jumbo",
		};
		var croutesPizza = {
			r: "Régulière",
			m: "Mince",
			p: "Pan",
			f: "Farcie",
		}
		document.getElementById("app").appendChild(this.html_select(taillesPizza));
		document.getElementById("app").appendChild(this.html_radiogroup(croutesPizza));
	}
	static html_select(elements) {
		var select = document.createElement("select");
		select.setAttribute("name", "taille");
		for (let value in elements) {
			select.appendChild(this.html_option(value, elements[value]));
		}
		return select;
	}
	static html_option(value, text) {
		var option = document.createElement("option");
		option.setAttribute("value", value);
		option.innerHTML = text;
		return option;
	}
	static html_radiogroup(elements) {
		var fieldset = document.createElement("fieldset");
		fieldset.setAttribute("name", "taille");
		for (let value in elements) {
			fieldset.appendChild(this.html_radio(value, elements[value]));
		}
		return fieldset;
	}
	static html_radio(value, text) {
		var resultat = document.createElement("div");
		var label = resultat.appendChild(document.createElement("label"));
		var input = label.appendChild(document.createElement("input"));
		input.setAttribute("type", "radio");
		input.setAttribute("name", "taille");
		input.setAttribute("id", "taille");
		input.setAttribute("value", value);
		label.appendChild(document.createTextNode(text));
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
