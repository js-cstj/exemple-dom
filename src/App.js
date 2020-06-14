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
		var principal = {
			"Édition": "edition.html",
			"Sélection": "selection.html",
			"Affichage": "affichage.html",
			"Fenêtre": "fenetre.html",
			"Aide": "aide.html",
		}
		document.getElementById("app").appendChild(this.html_nav(principal, "principal"));
	}
	static html_nav(elements, classe) {
		var resultat = document.createElement("nav");
		var ul = resultat.appendChild(document.createElement("ul"));
		if (classe) {
			resultat.classList.add(classe);
		}

		ul.appendChild(this.html_li("index.html", "Accueil"));
		for (let element in elements) {
			ul.appendChild(this.html_li(elements[element], element));
		}
		ul.appendChild(this.html_li("about.html", "À propos de nous"));
		return resultat;
	}
	static html_li(url, etiquette) {
		var resultat = document.createElement("li");
		var a = resultat.appendChild(document.createElement("a"));
		a.setAttribute("href", url);
		a.innerHTML = etiquette;
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
