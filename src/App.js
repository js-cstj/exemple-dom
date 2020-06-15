/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
import {stats} from "./stats.js";
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		document.getElementById("app").appendChild(this.html_stats(stats));
	}
	static html_stats(stats) {
		var resultat = document.createElement("table");

		resultat.classList.add("stats");
		resultat.appendChild(this.html_colgroup(stats.colonnes));
		resultat.appendChild(this.html_thead(stats.colonnes));
		resultat.appendChild(this.html_tbody(stats));
		return resultat;
	}
	static html_colgroup(colonnes) {
		var resultat = document.createElement("colgroup");
		colonnes.forEach(colonne => {
			var col = resultat.appendChild(document.createElement("col"));
			col.setAttribute("id", "col-" + colonne.id);
		});
		return resultat;
	}
	static html_thead(colonnes) {
		var resultat = document.createElement("thead");
		var tr = resultat.appendChild(document.createElement("tr"));
		colonnes.forEach(colonne => {
			var th = tr.appendChild(document.createElement("th"));
			th.setAttribute("title", colonne.titre);
			th.setAttribute("data-for", colonne.id);
			th.innerHTML = colonne.label;
		});
		return resultat;
	}
	static html_tbody(stats) {
		var resultat = document.createElement("tbody");

		stats.equipes.forEach(statsEquipe => {
			resultat.appendChild(this.html_equipe(statsEquipe, stats.colonnes));
		});
		return resultat;
	}
	static html_equipe(statsEquipe, colonnes) {
		var resultat = document.createElement("tr");
		colonnes.forEach(colonne => {
			if (colonne.th) {
				var cell = resultat.appendChild(document.createElement("th"));
			} else {
				var cell = resultat.appendChild(document.createElement("td"));
			}
			this.ajouterStyle(cell, colonne.style);
			cell.innerHTML = statsEquipe[colonne.id];
		});
		return resultat;
	}
	static ajouterStyle(objHtml, style) {
		if (!style) {
			return;
		}
		for(let prop in style) {
			objHtml.style.setProperty(prop, style[prop]);
		}
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
