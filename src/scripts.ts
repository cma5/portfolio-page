export enum Delays {
    SHORT = 300,
    MEDIUM = 500,
    LONG = 1000,
}


function toggleVisibility(element: HTMLElement) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}