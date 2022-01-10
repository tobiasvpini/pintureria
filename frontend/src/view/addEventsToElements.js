import hideForm from "./closeForm.js";
import validateCheckbox from "./validateCheckboxes.js";
import changeMainImg from "./changeMainImg.js";
import showForm from "./openForm.js";
import checkOffset from "./handleScroll.js";

function addEvents(){
    document.querySelector("#formMobilIcon").onclick = showForm;
    document.querySelector(".fa-times-circle").onclick = hideForm;
    document.querySelector("#cboxTelefono").onchange = validateCheckbox;
    document.querySelector("#cboxEmail").onchange = validateCheckbox;
    document.querySelectorAll(".sub-article").forEach(element => {
        element.addEventListener("click", changeMainImg);
    })
    document.onscroll = checkOffset;
}


export default addEvents;
