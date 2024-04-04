function toggleVisibility(elementID) {
    var element = document.getElementsByClassName(elementID)[0]

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
    const element = document.getElementsByClassName('floating-menu')[0]
    const activeMenuButton = document.getElementsByClassName('active-menu-button')[0]
    const target = event.target

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
    const element = document.getElementsByClassName('vertical-menu')[0]
    if (x.matches) {
        element.style.display = "none"
    }
})

var r = document.querySelector(':root');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark Mode
    r.style.setProperty('--background-color', '#1e1e1e');
    r.style.setProperty('--vertical-menu-background-color', '#1e1e1e');
    r.style.setProperty('--text-color', '#f0f0f0');
    r.style.setProperty('--text-color-light', '#f0f0f0');
    r.style.setProperty('--hover-text-color', '#f0f0f0');
    r.style.setProperty('--surface-color', '#2d2d30');
    r.style.setProperty('--border-color', '#3e3e24');
    r.style.setProperty('--hover-background-color', '#3e3e24');


}

window
   .matchMedia("(prefers-color-scheme: dark)")
   .addEventListener("change", (event) => {
       const theme = event.matches ? "dark" : "light";
   });
