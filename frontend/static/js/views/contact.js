import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(params){
        super(params);
        this.setTitle("contact - markus schnugg");
        this.getHtml("static/html/views/contact.html");
        this.getCss("static/css/contact.css");
    }
}