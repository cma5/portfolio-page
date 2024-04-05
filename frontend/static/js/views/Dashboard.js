import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
        this.getHtml("/static/html/views/Dashboard.html")
    }
}