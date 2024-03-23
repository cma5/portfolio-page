function toggleVisibility(elementID) {
    var element = document.getElementsByClassName(elementID)[0];
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
    //eventlistener for clicking outside of the element
}
// event listener for clicking outside of the element
document.addEventListener('click', function (event) {
    var element = document.getElementsByClassName('floating-menu')[0];
    var activeMenuButton = document.getElementsByClassName('active-menu-button')[0];
    var target = event.target;
    if (element.style.display === "flex" && !element.contains(target) && !activeMenuButton.contains(target)) {
        element.style.display = "none";
    }
});
