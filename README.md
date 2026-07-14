# Five Abidjan — Site web

Site vitrine du restaurant **Five Abidjan** (gastronomie française · live · karaoké), aux II Plateaux, Rue des Jardins.

## Fonctionnalités

- Page unique avec **effets de scroll** (révélations, parallaxe, vidéos jouées à l'écran)
- **Menu interactif** — La Cuisine & La Carte des Vins, par catégories cliquables
- **Panier flottant** — composez votre commande, résumé en bas à droite, envoi sur **WhatsApp** avec message pré-rempli
- **Réservation** — formulaire redirigeant vers WhatsApp avec message pré-rempli
- **Localisation Google Maps** intégrée, horaires et contact
- Direction artistique : noir profond, or champagne, ivoire — d'après le logo et les visuels du restaurant

## Structure

```
site/
├── index.html            Page principale
└── assets/
    ├── css/style.css      Styles & direction artistique
    ├── js/main.js         Menu, panier, réservation, scroll effects
    └── media/             Logo, images et vidéos du restaurant
```

Les dossiers `menu/`, `info site/` et `Inage video site/` contiennent les sources brutes fournies (menu, informations, visuels).

## Lancer en local

```bash
cd site
python3 -m http.server 8000
```
Puis ouvrir http://localhost:8000

## Contact

Five Abidjan — II Plateaux, Rue des Jardins · +225 07 09 08 88 08
