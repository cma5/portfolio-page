import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("home");
        this.getHtml("/static/html/views/home.html")
        this.getCss("/static/css/home.css");
    }
}