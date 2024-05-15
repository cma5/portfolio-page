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

var r = document.querySelector(':root');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark Mode
    r.style.setProperty('--background-color', '#1e1e1e');
    r.style.setProperty('--text-color', '#FEFEFE');
    r.style.setProperty('--hover-text-color', '#f0f0f0');
    r.style.setProperty('--heading-color', '#FEFEFE');
    r.style.setProperty('--surface-color', '#2d2d30');
    r.style.setProperty('--hover-background-color', '#DDDDDD');
}

window
   .matchMedia("(prefers-color-scheme: dark)")
   .addEventListener("change", (event) => {
       const theme = event.matches ? "dark" : "light";
   });
