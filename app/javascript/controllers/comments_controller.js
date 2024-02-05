import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
    }

    toggleForm(event){
        event.preventDefault();
        event.stopPropagation();
        const formID= event.params["form"];
        const commentBodyId = event.params["body"];
        const form = document.getElementById(formID);
        form.classList.toggle("d-none");
        const commentBody = document.getElementById(commentBodyId);
        commentBody.classList.toggle("d-none");
    }
}