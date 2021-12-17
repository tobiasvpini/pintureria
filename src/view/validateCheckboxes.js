function validateCheckbox(){
    let checkboxArray = document.querySelectorAll("input[type='checkbox']");
    checkboxArray = Array.from(checkboxArray);
    
    checkboxArray.some(element => {
        if(element.checked === true){
            if(element.id === "cboxTelefono"){
                document.querySelector("#telefono").disabled = false;
            }
            if(element.id === "cboxEmail"){
                document.querySelector("#email").disabled = false;
            }
        } else {
            if(element.id === "cboxTelefono"){
                document.querySelector("#telefono").disabled = true;
            }
            if(element.id === "cboxEmail"){
                document.querySelector("#email").disabled = true;
            }
        }
    })
            
}


export default validateCheckbox;