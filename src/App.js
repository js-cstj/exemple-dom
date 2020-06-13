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
		document.getElementById("app").appendChild(this.html_select());
		document.getElementById("app").appendChild(this.html_radiogroup());
	}
	static html_select() {
		var select = document.createElement("select");
		select.setAttribute("name", "taille");
		select.appendChild(this.html_option("xs", "Extra Small"));
		select.appendChild(this.html_option("s", "Small"));
		select.appendChild(this.html_option("m", "Medium"));
		select.appendChild(this.html_option("l", "Large"));
		select.appendChild(this.html_option("xl", "Extra Large"));
		return select;
	}
	static html_option(value, text) {
		var option = document.createElement("option");
		option.setAttribute("value", value);
		option.innerHTML = text;
		return option;
	}
	static html_radiogroup() {
		var fieldset = document.createElement("fieldset");
		fieldset.setAttribute("name", "taille");
		fieldset.appendChild(this.html_radio("xs", "Extra Small"));
		fieldset.appendChild(this.html_radio("s", "Small"));
		fieldset.appendChild(this.html_radio("m", "Medium"));
		fieldset.appendChild(this.html_radio("l", "Large"));
		fieldset.appendChild(this.html_radio("xl", "Extra Large"));		
		return fieldset;
	}
	static html_radio(value, text) {
		var label = document.createElement("label");
		var input = label.appendChild(document.createElement("input"));
		input.setAttribute("type", "radio");
		input.setAttribute("name", "taille");
		input.setAttribute("id", "taille");
		input.setAttribute("value", value);
		label.appendChild(document.createTextNode(text));
		return label;
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
