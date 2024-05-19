import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(params) {
        super(params);
        this.setTitle("posts - markus schnugg");
        this.getHtml("static/html/views/portfolio.html")
        this.getCss("static/css/portfolio.css")
    }
}