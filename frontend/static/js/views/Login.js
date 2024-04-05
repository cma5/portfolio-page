import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params);
        this.setTitle("Login");
        this.getHtml("static/html/views/Login.html");
        this.getCss("static/css/Login.css");
        this.getJs("static/js/views/actions/LoginAction.js");
    }
}