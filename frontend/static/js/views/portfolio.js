import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
        this.getHtml("static/html/views/portfolio.html")
        this.getCss("static/css/portfolio.css")
    }
}