function toggleVisibility(elementID: string) {
    const element:any = document.getElementsByClassName(elementID)[0]

    if (element === null) {
        console.error(`Element with ID ${elementID} not found`)
        return
    }
    if (element.style.display === "none") {
        element.style.display = "flex"
    }
    else {
        element.style.display = "none"
    }
    //eventlistener for clicking outside of the element
}

// event listener for clicking outside of the element
document.addEventListener('click', function(event) {
    const element:any = document.getElementsByClassName('floating-menu')[0]
    const activeMenuButton:any = document.getElementsByClassName('active-menu-button')[0]
    const target = event.target as HTMLElement

    if (element.style.display === "flex" && !element.contains(target) && !activeMenuButton.contains(target)) {
        element.style.display = "none"
    }
})


