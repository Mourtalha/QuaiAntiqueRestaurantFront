import Route from "./Route.js";
2;
import { allRoutes, websiteName } from "./allRoutes.js";
3;
4;
// Création d'une route pour la page 404 (page introuvable)
5;
const route404 = new Route("404", "Page introuvable", "/pages/404.html");
6;
7;
// Fonction pour récupérer la route correspondant à une URL donnée
8;
const getRouteByUrl = (url) => {
  9;
  let currentRoute = null;
  10;
  // Parcours de toutes les routes pour trouver la correspondance
  11;
  allRoutes.forEach((element) => {
    12;
    if (element.url == url) {
      13;
      currentRoute = element;
      14;
    }
    15;
  });
  16;
  // Si aucune correspondance n'est trouvée, on retourne la route 404
  17;
  if (currentRoute != null) {
    18;
    return currentRoute;
    19;
  } else {
    20;
    return route404;
    21;
  }
  22;
};
23;
24;
// Fonction pour charger le contenu de la page
25;
const LoadContentPage = async () => {
  26;
  const path = window.location.pathname;
  27;
  // Récupération de l'URL actuelle
  28;
  const actualRoute = getRouteByUrl(path);
  29;
  // Récupération du contenu HTML de la route
  30;
  const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
  31;
  // Ajout du contenu HTML à l'élément avec l'ID "main-page"
  32;
  document.getElementById("main-page").innerHTML = html;
  33;
  34;
  // Ajout du contenu JavaScript
  35;
  if (actualRoute.pathJS != "") {
    36;
    // Création d'une balise script
    37;
    var scriptTag = document.createElement("script");
    38;
    scriptTag.setAttribute("type", "text/javascript");
    39;
    scriptTag.setAttribute("src", actualRoute.pathJS);
    40;
    41;
    // Ajout de la balise script au corps du document
    42;
    document.querySelector("body").appendChild(scriptTag);
    43;
  }
  44;
  45;
  // Changement du titre de la page
  46;
  document.title = actualRoute.title + " - " + websiteName;
  47;
};
48;
49;
// Fonction pour gérer les événements de routage (clic sur les liens)
50;
const routeEvent = (event) => {
  51;
  event = event || window.event;
  52;
  event.preventDefault();
  53;
  // Mise à jour de l'URL dans l'historique du navigateur
  54;
  window.history.pushState({}, "", event.target.href);
  55;
  // Chargement du contenu de la nouvelle page
  56;
  LoadContentPage();
  57;
};
58;
59;
// Gestion de l'événement de retour en arrière dans l'historique du navigateur
60;
window.onpopstate = LoadContentPage;
61;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
62;
window.route = routeEvent;
63;
// Chargement du contenu de la page au chargement initial
64;
LoadContentPage();
