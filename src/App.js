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
		document.getElementById("app").appendChild(this.html_figure());
	}
	static html_figure() {
		var resultat = document.createElement("figure");
		resultat.classList.add("polaroid");
		var img = document.createElement("img");
		resultat.appendChild(img);
		img.setAttribute("src", "https://pbs.twimg.com/profile_images/741257953332891648/3xFijf2U.jpg");
		var figcaption = document.createElement("figcaption");
		resultat.appendChild(figcaption);
		figcaption.innerHTML = "Photo de mon chat";

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
