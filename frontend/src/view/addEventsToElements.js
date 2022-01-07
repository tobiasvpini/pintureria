import hideForm from "./closeForm.js";
import validateCheckbox from "./validateCheckboxes.js";
import changeMainImg from "./changeMainImg.js";
import showForm from "./openForm.js";
import checkOffset from "./handleScroll.js";
import handleSubmit from "./sendFormData.js";


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
    document.onscroll = checkOffset;
    document.querySelector("#sendBtnForm").onclick = handleSubmit;
}


export default addEvents;
