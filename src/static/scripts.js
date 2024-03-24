var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
function toggleVisibility(elementID) {
    var element = document.getElementsByClassName(elementID)[0];
    if (element === null) {
        console.error("Element with ID ".concat(elementID, " not found"));
        return;
    }
    if (element.style.display !== "flex") {
        element.style.display = "flex";
    }
    else {
        element.style.display = "none";
    }
}
// event listener for clicking outside of the floatng-menu
document.addEventListener('click', function (event) {
    var element = document.getElementsByClassName('floating-menu')[0];
    var activeMenuButton = document.getElementsByClassName('active-menu-button')[0];
    var target = event.target;
    if (element.style.display === "flex"
        && !element.contains(target)
        && !activeMenuButton.contains(target)) {
        element.style.display = "none";
    }
});
// event listener for hiding the vertical menu when the window is resized
window.addEventListener('resize', function () {
    var x = window.matchMedia("(min-width: 641px)");
    var element = document.getElementsByClassName('vertical-menu')[0];
    if (x.matches) {
        element.style.display = "none";
    }
});
var pathToRegex = function (path) { return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"); };
var router = function () { return __awaiter(_this, void 0, void 0, function () {
    var routes, potentialMatches, match;
    return __generator(this, function (_a) {
        routes = [
            { path: "/" },
            { path: "/artist" },
            { path: "/overview" },
            { path: "/login" },
            { path: "/account" }
        ];
        potentialMatches = routes.map(function (route) {
            return {
                route: route,
                result: location.pathname.match(pathToRegex(route.path))
            };
        });
        match = potentialMatches.find(function (potentialMatch) { return potentialMatch.result !== null; });
        if (!match) {
            match = {
                route: routes[0],
                result: [location.pathname]
            };
        }
        console.log(match);
        return [2 /*return*/];
    });
}); };
var navigateTo = function (url) {
    history.pushState(null, "", url);
    router();
};
document.addEventListener("DOMContentLoaded", function () {
    /* Document has loaded -  run the router! */
    router();
});
window.addEventListener("popstate", router);
var getParams = function (match) {
    var values = match.result.slice(1);
    var keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(function (result) { return result[1]; });
    return Object.fromEntries(keys.map(function (key, i) {
        return [key, values[i]];
    }));
};
