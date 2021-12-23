import hideOpenFormSection from "./hideOpenFormSection.js";

function showForm(){
    let form = document.querySelector('#form-container');
    let btn = document.querySelector('#formMobilIcon');
    form.style.visibility = 'visible';
    btn.disabled = true;

    hideOpenFormSection();

    return false;
}

export default showForm;