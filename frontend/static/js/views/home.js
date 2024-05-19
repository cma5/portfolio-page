import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("markus schnugg");
        this.getHtml("/static/html/views/home.html")
        this.getCss("/static/css/home.css");
    }
}