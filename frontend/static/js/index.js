import portfolio from "./views/portfolio.js";
import contact from "./views/contact.js";
import home from "./views/home.js";


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

async function deleteCss() {
    let link = document.createElement('link');
    link.href = '/static/css/index.css';
    link.type = 'text/css';
    link.rel = 'stylesheet';

    let hasCss = false;
    let links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href != link.href) {
            document.getElementsByTagName('head')[0].removeChild(links[i]);
        }
    }
}

const router = async () => {
    const routes = [
        { path: "/", view: home },
        { path: "/portfolio", view: portfolio },
        { path: "/contact", view: contact }
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
    deleteCss();

    new match.route.view(getParams(match));
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