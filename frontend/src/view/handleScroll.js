export default function checkOffset() {
    if(document.querySelector('#form-container').offsetTop + document.querySelector('#form-container').style.height >= document.querySelector('#footer-container').offsetTop - 100){
        document.querySelector('#form-container').style.position = 'absolute';
        console.log("hla")
    }
    if(document.querySelector("#form-container").offsetTop + window.innerHeight < document.querySelector('#footer-container').offsetTop){
        document.querySelector('#form-container').style.position = 'fixed'; // restore when you scroll up
        console.log("gls")
    }
}

