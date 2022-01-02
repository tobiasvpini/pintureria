export default function checkOffset() {
    const form = document.querySelector("#form-container");

    if((window.innerHeight + window.scrollY ) > document.body.offsetHeight - 155) {
        form.style.position = "absolute";
        form.style.top = "2020px"
        console.log("holaabs")
    } else{
        form.style.position = "fixed";
        form.style.top = form.scrollTop + 243 + "px";      
    }
      
    
    
    
}

