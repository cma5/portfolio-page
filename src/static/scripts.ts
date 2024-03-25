import Dashboard from "./views/abstract-view.js";


function toggleVisibility(elementID: string) {
    const element: any = document.getElementsByClassName(elementID)[0]

    if (element === null) {
        console.error(`Element with ID ${elementID} not found`)
        return
    }
    if (element.style.display !== "flex") {
        element.style.display = "flex"
    }
    else {
        element.style.display = "none"
    }
}

// event listener for clicking outside of the floatng-menu
document.addEventListener('click', function (event) {
    const element: any = document.getElementsByClassName('floating-menu')[0]
    const activeMenuButton: any = document.getElementsByClassName('active-menu-button')[0]
    const target = event.target as HTMLElement

    if (element.style.display === "flex"
        && !element.contains(target)
        && !activeMenuButton.contains(target)
    ) {
        element.style.display = "none"
    }
})

// event listener for hiding the vertical menu when the window is resized
window.addEventListener('resize', function () {
    var x = window.matchMedia("(min-width: 641px)")
    const element: any = document.getElementsByClassName('vertical-menu')[0]
    if (x.matches) {
        element.style.display = "none"
    }
})

const pathToRegex = (path: string) => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const router = async () => {
    const routes = [
        { path: "/" },
        { path: "/artist" },
        { path: "/overview" },
        { path: "/login" },
        { path: "/account"}
    ];
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        }
    }
    console.log(match);
}

const navigateTo = (url: string) => {
    history.pushState(null, "", url);
    router();
}

document.addEventListener("DOMContentLoaded", () => {
    /* Document has loaded -  run the router! */
    router();
});


window.addEventListener("popstate", router)

const getParams = (match: any) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result: RegExpMatchArray) => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};