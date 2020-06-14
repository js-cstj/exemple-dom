# Select et boutons radio
Reproduire le HTML à l'aide d'instructions Javascript

## Particularités
- Aucun CSS

## Variantes et ajouts possibles
- Utiliser des objets génériques comme source de données

## Exemple de données
```javascript
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
```

## HTML final
```html
<select name="taille">
    <option value="s">Small</option>
    <option value="m">Medium</option>
    <option value="l">Large</option>
    <option value="xl">Extra Large</option>
    <option value="j">Jumbo</option>
</select>
<fieldset name="taille">
    <div><label><input type="radio" name="taille" id="taille" value="r">Régulière</label></div>
    <div><label><input type="radio" name="taille" id="taille" value="m">Mince</label></div>
    <div><label><input type="radio" name="taille" id="taille" value="p">Pan</label></div>
    <div><label><input type="radio" name="taille" id="taille" value="f">Farcie</label></div>
</fieldset>
```
