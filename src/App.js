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
		resultat.style.backgroundColor = "hsl(0, 0%, 20%)";
		var tbody = resultat.appendChild(document.createElement("tbody"));
		var tr = tbody.appendChild(document.createElement("tr"));
		var td = tr.appendChild(document.createElement("td"));
		td.appendChild(this.html_feu(0));
		var tr = tbody.appendChild(document.createElement("tr"));
		var td = tr.appendChild(document.createElement("td"));
		td.appendChild(this.html_feu(60));
		var tr = tbody.appendChild(document.createElement("tr"));
		var td = tr.appendChild(document.createElement("td"));
		td.appendChild(this.html_feu(120, true));
		return resultat;
	}
	static html_feu(hue, allume=false) {
		var div = document.createElement("div");
		div.style.borderRadius = "100%";
		div.style.width = "3em";
		div.style.height = "3em";
		if (allume) {
			div.style.backgroundColor = "hsl("+hue+", 100%, 50%)";
			div.style.boxShadow = "0 0 2em hsl("+hue+", 100%, 50%)";
		} else {
			div.style.backgroundColor = "hsl("+hue+", 100%, 20%)";
		}
		
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
