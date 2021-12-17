import cleanForm from "./cleanForm.js"
import showOpenFormSection from "./openFormSection.js";

function hideForm(){
    let form = document.querySelector("#form-container");
    let btn = document.querySelector('#formMobilIcon');
    form.style.visibility = "hidden";
    btn.disabled = false;

    cleanForm();
    showOpenFormSection();
    
    return false;
}

export default hideForm;