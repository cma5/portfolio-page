"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delays = void 0;
var Delays;
(function (Delays) {
    Delays[Delays["SHORT"] = 300] = "SHORT";
    Delays[Delays["MEDIUM"] = 500] = "MEDIUM";
    Delays[Delays["LONG"] = 1000] = "LONG";
})(Delays || (exports.Delays = Delays = {}));
function toggleVisibility(elementID) {
    var element = document.getElementById(elementID);
    if (element === null) {
        console.error("Element with ID ".concat(elementID, " not found"));
        return;
    }
    if (element.style.display === "none") {
        element.style.display = "flex";
    }
    else {
        element.style.display = "none";
    }
}
