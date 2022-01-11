export default function checkOffset() {
    const form = document.querySelector("#form-container");

    if(window.matchMedia("(min-width: 1025px)").matches){

        if((window.innerHeight + window.scrollY ) > document.body.offsetHeight - 200) {
            form.style.position = "absolute";
            form.style.top = "1200px";
            console.log("estoy aca")
        } else if(window.scrollY < 1750){
            form.style.position = "fixed";
            form.style.top = form.scrollTop + 246.8 + "px";    
            console.log(window.scrollY) 
            console.log("xd bro")
        } 
          
    } 

}
