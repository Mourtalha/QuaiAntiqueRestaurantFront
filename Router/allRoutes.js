import Route from "./Route.js";
2;
3;
//Définir ici vos routes
4;
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "la galerie", "/pages/galerie.html"),
  new Route("/menu", "le Menu", "/pages/menu.html"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html"),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
  new Route(
    "/editPassword",
    "Changement de mot de passe",
    "/pages/auth/editPassword.html"
  ),
  new Route("/allResa", "Vos réservation", "/pages/reservation/allResa.html"),
  new Route("/reserver", "Reserver", "/pages/reservation/reserver.html"),
  new Route("/cancelResa", "Annulation", "/pages/reservation/cancelResa.html"),
];
6;
7;
//Le titre s'affiche comme ceci : Route.titre - websitename
8;
export const websiteName = "Quai Antique";
