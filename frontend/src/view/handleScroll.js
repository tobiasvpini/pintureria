export default function checkOffset() {
    const form = document.querySelector("#form-container");

    if(window.matchMedia("(min-width: 1025px)").matches){

        if((window.innerHeight + window.scrollY ) > document.body.offsetHeight - 200) {
            form.style.position = "absolute";
            form.style.top = "1415px";
            console.log("estoy aca")
        } else if(window.scrollY < 1800){
            form.style.position = "fixed";
            form.style.top = form.scrollTop + 245.5 + "px";    
            console.log(window.scrollY) 
            console.log("xd bro")
        } 
          
    } 

}
