linkbuttons = Array.from(document.querySelectorAll('.navigation-button,.floating-menu-button'))

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");


linkbuttons.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(pathToRegex(element.getAttribute('data-url')));
        event.target.href = element.getAttribute('data-url');
        route(event);
    });
});


const routes = {
    404: {
        template: "static/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "static/templates/index-add.html",
        title: "Home",
        description: "This is the home page content",
    },
    "/overview": {
        template: "static/templates/overview.html",
        title: "About Us",
        description: "This is the overview page",
    },
    "/overview/:id": {
        template: "static/templates/overview.html",
        title: "About Us",
        description: "This is the overview page",
    },
    "/signin": {
        template: "static/templates/signin.html",
        title: "Contact Us",
        description: "This is the signin page",
    },
};

const route = (event) => {
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();
};

const locationHandler = async () => {
    let location = window.location.pathname; // get the url path
    // if the path length is 0, set it to primary page route
    if (location.length == 0 || location == "/") {
        location = "/";
    } else {
        let res = [];
        Object.keys(routes).forEach((myroute) => {
            const loc = location.match(pathToRegex(myroute));
            // no input or only a slash
            if (loc != null) {
                res = loc
            }
        });
        if (res.length > 1) {
            printres = res[0].split('/');
            location = "/"+printres[1];
            console.log(location);
        }
    }

    // get the route object from the urlRoutes object
    const route = routes[location] || routes["404"];
    console.log(route);
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("content").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = route;
// call the urlLocationHandler function to handle the initial url
locationHandler();
