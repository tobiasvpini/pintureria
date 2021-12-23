function cleanForm(){

    document.querySelector("#nombre-input").value = "";
    document.querySelector("#telefono").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("textarea").textContent = "";
    document.querySelector("#cboxTelefono").checked = false;
    document.querySelector("#cboxEmail").checked = false;
    if(document.querySelector("#telefono").disabled === false || document.querySelector("#email").disabled === false){
        document.querySelector("#telefono").disabled = true;
        document.querySelector("#email").disabled = true;        
    } 
    document.querySelector("textarea").value = "";
}

export default cleanForm;