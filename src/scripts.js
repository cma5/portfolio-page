"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delays = void 0;
var Delays;
(function (Delays) {
    Delays[Delays["SHORT"] = 300] = "SHORT";
    Delays[Delays["MEDIUM"] = 500] = "MEDIUM";
    Delays[Delays["LONG"] = 1000] = "LONG";
})(Delays || (exports.Delays = Delays = {}));
function toggleVisibility(element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}
