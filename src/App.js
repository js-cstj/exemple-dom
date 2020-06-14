/*jslint esnext:true, browser:true*/

/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		var jours = [
			"dimanche", 
			"lundi", 
			"mardi", 
			"mercredi", 
			"jeudi", 
			"vendredi", 
			"samedi",
		];
		var mois = [
			"janvier", 
			"février", 
			"mars", 
			"avril", 
			"mai", 
			"juin", 
			"juillet",
			"août",
			"septembre",
			"octobre",
			"novembre",
			"decembre",
		];
		var signes = [
			"bélier", 
			"taureau", 
			"gémeaux", 
			"cancer", 
			"lion", 
			"vierge", 
			"balance",
			"scorpion",
			"sagittaire",
			"capricorne",
			"verseau",
			"poissons",
		];
		document.getElementById("app").appendChild(this.html_liste(jours));
		document.getElementById("app").appendChild(this.html_liste(mois));
		document.getElementById("app").appendChild(this.html_liste(signes));
	}
	static html_liste(elements, ordonnee = false) {
		var resultat;
		if (ordonnee) {
			resultat = document.createElement("ol");
		} else {
			resultat = document.createElement("ul");
		}
		elements.forEach(element => {
			resultat.appendChild(this.html_li(element));
		});
		return resultat;
	}
	static html_li(contenu) {
		var resultat = document.createElement("li");
		resultat.innerHTML = contenu;
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
