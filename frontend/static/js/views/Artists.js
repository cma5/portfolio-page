import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
        this.getHtml("static/html/views/Artists.html")
        this.getCss("static/css/Artists.css")
        this.getJs("static/js/views/actions/ArtistsAction.js")
    }
/*
    async getHtml() {
        const html = await fetch("static/html/views/Artists.html").then((response) => response.text());
        return html
    }

    async getCss() {
        let link = document.createElement('link');
        link.href = 'static/css/Artists.css';
        link.type = 'text/css';
        link.rel = 'stylesheet';

        let hasCss = false;
        let links = document.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
            if (links[i].href == link.href) {
                hasCss = true;
            }
        }
        if (!hasCss) {
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    }

    async getJs() {
        let script = document.createElement('script');
        script.src = 'static/js/views/actions/ArtistsAction.js';
        let scripts = document.getElementsByTagName('script');
        let hasJs = false;
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src == script.src) {
                hasJs = true;
            }
        }
        if (!hasJs) {
            document.getElementsByTagName('body')[0].appendChild(script);
        }
    }
    */
}