import cleanForm from "./cleanForm.js"
import showOpenFormSection from "./openFormSection.js";

let form = document.querySelector("#form-container");
let btn = document.querySelector('#formMobilIcon');

function hideForm(){

    form.style.display = "none";
    btn.disabled = false;

    cleanForm();
    showOpenFormSection();
    
    return false;
}

export default hideForm;