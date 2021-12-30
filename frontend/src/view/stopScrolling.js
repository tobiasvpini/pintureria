
export default function stopScroll(){
    let element = document.querySelector("#form-container");

    if(window.scrollY > 2050){
        element.style.position = "static";
        element.style.display = "block"
    }
    
}

