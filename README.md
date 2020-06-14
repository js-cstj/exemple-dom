# Le menu DOM
Recréer un menu à partir d'un objet générique.

## Objet générique
```javascript
var principal = {
    "Édition": "edition.html",
    "Sélection": "selection.html",
    "Affichage": "affichage.html",
    "Fenêtre": "fenetre.html",
    "Aide": "aide.html",
}
```

## HTML final

```html
<nav class="principal">
    <ul>
        <li><a href="index.html">Accueil</a></li>
        <li><a href="edition.html">Édition</a></li>
        <li><a href="selection.html">Sélection</a></li>
        <li><a href="affichage.html">Affichage</a></li>
        <li><a href="fenetre.html">Fenêtre</a></li>
        <li><a href="aide.html">Aide</a></li>
        <li><a href="about.html">À propos de nous</a></li>
    </ul>
</nav>
```
## Particularités
- Le projet nécessite 2 méthodes statiques : une pour le nav et une pour chaque li;
- Le nom de la classe est fourni en paramêtre et pourrait être absent.
- Le CSS est complet.