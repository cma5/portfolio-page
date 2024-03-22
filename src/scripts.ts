export enum Delays {
    SHORT = 300,
    MEDIUM = 500,
    LONG = 1000,
}


function toggleVisibility(elementID: string) {
    const element = document.getElementById(elementID)

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
}