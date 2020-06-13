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
		document.getElementById("app").appendChild(this.html_feuxCirculation());
	}
	static html_feuxCirculation() {
		var resultat = document.createElement("table");
		resultat.style.borderSpacing = "1em";
		resultat.style.backgroundColor = "#333";
		var tbody = resultat.appendChild(document.createElement("tbody"));
		var tr = tbody.appendChild(document.createElement("tr"));
		var td = tr.appendChild(document.createElement("td"));
		td.appendChild(this.html_feu("hsl(0, 100%, 50%)"));
		var tr = tbody.appendChild(document.createElement("tr"));
		var td = tr.appendChild(document.createElement("td"));
		td.appendChild(this.html_feu("hsl(60, 100%, 50%)"));
		var tr = tbody.appendChild(document.createElement("tr"));
		var td = tr.appendChild(document.createElement("td"));
		td.appendChild(this.html_feu("hsl(120, 100%, 50%)"));
		return resultat;
	}
	static html_feu(couleur) {
		var div = document.createElement("div");
		div.style.borderRadius = "100%";
		div.style.width = "3em";
		div.style.height = "3em";
		div.style.backgroundColor = couleur;
		return div;
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
