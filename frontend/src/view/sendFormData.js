function sendFormData() {

  function sendData() {
    let XHR = new XMLHttpRequest()
    let FD = new FormData(form)
    XHR.open('POST', '#')
    XHR.send(FD)
  }

  let form = document.getElementsByName('contact');
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    sendData()
  })

}

export default sendFormData