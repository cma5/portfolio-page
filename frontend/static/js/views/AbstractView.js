export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml(htmllink) {
        const html = await fetch(htmllink).then((response) => response.text());
        document.querySelector("#app").innerHTML = html
    }

    async getCss(csslink) {
        let link = document.createElement('link');
        link.href = csslink;
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

    async getJs(jslink) {
        let script = document.createElement('script');
        script.src = jslink;
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
}