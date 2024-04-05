import Dashboard from "./views/Dashboard.js";
import Artists from "./views/Artists.js";
import ArtistsView from "./views/ArtistsView.js";
import Login from "./views/Login.js";
import Settings from "./views/Settings.js";


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/artists", view: Artists },
        { path: "/artists/:id", view: ArtistsView },
        { path: "/signin", view: Login }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));
    /*
    document.querySelector("#app").innerHTML = await view.getHtml();
    await view.getCss();
    await view.getJs();
    */
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-url]")) {
            e.preventDefault();
            navigateTo(e.target.getAttribute("data-url"));
        }
    });

    router();
});