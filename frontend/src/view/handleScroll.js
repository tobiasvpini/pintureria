export default function checkOffset() {
    const form = document.querySelector("#form-container");

    if(window.matchMedia("(min-width: 1025px)").matches){

        if((window.innerHeight + window.scrollY ) > document.body.offsetHeight - 200) {
            form.style.position = "absolute";
            form.style.top = "1695px";
        } else if(window.scrollY < 1900){
            form.style.position = "fixed";
            form.style.top = form.scrollTop + 247 + "px";    
            console.log(window.innerHeight - form.offsetTop + form.offsetHeight) 
        } 
          
    } 

}
