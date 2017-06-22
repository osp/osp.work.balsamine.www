Title: Ajouter du contenu
Slug: howto
Date: 2017/04
status: hidden

## Aller dans le répertoire content

![content](/images/how_to/content.png)

![sections](/images/how_to/sections.png)

- le répertoire *images* sert à ajouter des images
- le répertoire *pages* contient les pages principales du site (billeterie, contact...)
- le répertoire *saison-XX-XX* contiens les pages pour la timeline

## Pour ajouter des images

Aller dans le répertoire image et cliquer sur *Upload File*

![new-img](/images/how_to/new-img.png)

## Pour ajouter des événements à la timeline

Aller dans le répertoire saison-XX-XX et cliquer sur *New File*

![new-txt](/images/how_to/new-txt.png)

## Conventions Markdown

Ces conventions servent à mettre en forme le texte

### Entête d'événement

```
Title: <titre de l'événement>
Slug: <permet de changer l'URL de la page>
Date: <date du début de l'événenement>
End_date: <date de fin de l'événement>
Time: <heure de l'événement>
Key_image: <nom-image.png>
Piece_author: <nom de l'auteur>
Event_type: <type d'événement>
Reservation_link: <lien vers la réservation>
Intro: <introduction>
Color: <valeur de la couleur: #9C5C62>
* Language: <en / fr>
* Translation: True
* slug: <le-titre-de-l-event>
```

* Clés marquées d'une * à utiliser dans le [cas d'une page traduite](#traduire-une-page).


### Styles de texte


```
*italique*   **gras**
```
*italique*   **gras**


```
Titre
:   Texte tabulé

Direction générale et artistique
:   Monica Gomes
```
Titre
:   Texte tabulé

Direction générale et artistique
:   Monica Gomes


```
## Grand titre
### Petit titre
```
## Grand titre
### Petit titre


```
1. Item one
   1. Sub item one
   1. Sub item two
1. Item two
1. Item three
```
1. Item one
   1. Sub item one
   1. Sub item two
1. Item two
1. Item three


### Inserer des images

```
![texte alternatif](/images/nom-de-l'image.png)
```
![logo-balsa](/images/logo-balsa-16-17-large.svg)

### Inserer des liens

```
[texte à afficher](lien)
[Open Source Publishing](http://osp.kitchen)
[Fanny Arvieu](mailto:fanny.arvieu@balsamine.be)
```
[texte à afficher](lien)
[Open Source Publishing](http://osp.kitchen)
[Fanny Arvieu](mailto:fanny.arvieu@balsamine.be)

## Traduire une page:
Pour traduire une page en une autre langue, il faut signaler au système qu'il existe une traduction d'une page spécifique.

```
1. dupliquer le document à traduire
2. nommer le document de la page traduite avec un -en ou -nl: exemple `pratique-en.md`
3. dans l'entête du document original:
écrire les clés:
— slug: <le-même-slug-sur-toutes-les-pages-traduites>
— Translation: true
— Lang: <en / fr / nl / es>
dans l'entête du nouveau document, ecrire les clés:
— slug: <le-même-slug-sur-toutes-les-pages-traduites>
— Translation: true
— Lang: <en / fr / nl / es>
4. Traduire le contenu dans la langue du nouveau document.
```
Ensuite, un bouton pour changer de langue deviendra actif sur la/les pages en question.
