import abstractView from "./abstractView.js";

export default class extends abstractView {
    constructor(params){
        super(params);
        this.setTitle("contact");
        this.getHtml("static/html/views/contact.html");
        this.getCss("static/css/contact.css");
        this.getJs("static/js/views/actions/contactAction.js");
    }
}