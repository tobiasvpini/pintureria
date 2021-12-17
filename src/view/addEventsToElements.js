import showForm from "./openForm.js";
import hideForm from "./closeForm.js";
import validateCheckbox from "./validateCheckboxes.js";
import changeMainImg from "./changeMainImg.js";

function addEvents(){
    document.querySelector("#formMobilIcon").onclick = showForm;
    document.querySelector(".fa-times-circle").onclick = hideForm;
    document.querySelector("#cboxTelefono").onchange = validateCheckbox;
    document.querySelector("#cboxEmail").onchange = validateCheckbox;
    document.querySelector("#sendBtnForm").onclick = function (e) {
        e.preventDefault();
    }
    document.querySelectorAll(".sub-article").forEach(element => {
        element.addEventListener("click", changeMainImg);
    })
}


export default addEvents;
