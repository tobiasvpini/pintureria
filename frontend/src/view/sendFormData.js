let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
  e.preventDefault();

  const formData = new FormData(form);
  fetch(form.getAttribute('action'), {
    method: 'POST',
    headers: {
      'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: new URLSearchParams(formData).toString()
  })
  .then(res => {
    if (res) {
        alert('worked');
    }
  });
}

