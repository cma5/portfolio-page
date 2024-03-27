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

