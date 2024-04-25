import Route from "./Route.js";
2;
3;
//Définir ici vos routes
4;
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "la galerie", "/pages/galerie.html"),
  new Route("/menu", "le Menu", "/pages/menu.html"),
];
6;
7;
//Le titre s'affiche comme ceci : Route.titre - websitename
8;
export const websiteName = "Quai Antique";
