import hideOpenFormSection from "./hideOpenFormSection.js";

let form = document.querySelector('#form-container');
let btn = document.querySelector('#formMobilIcon');

function showForm(){
    if(window.matchMedia("(min-width: 320px)").matches){
        form.style.display = 'block';
        btn.disabled = true;
    
    }
    hideOpenFormSection();

    return false;
}

export default showForm;