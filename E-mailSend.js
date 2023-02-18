window.addEventListener("DOMContentLoaded", function() {
  // get the form elements defined in your form HTML above
var form = document.getElementById("my-from");
//var button = document.getElementById("my-form-button");
var status = document.getElementById("status")
// Success and Error functions for after the form is submitted




function success () {
  form.requestFullscreen();
  status.classList.add('error')
  status.innerHTML = "The message has been sent, I will contact you soon!";
}

function error() {
  status.classList.add('error')
  status.innerHTML = "Oops! Looks like the message was not sent, Please try again!";
}

 // handle the form submission event

 form.addEventListener("submit", function(ev) {
   ev.preventDefault();
   var data = new FormData(from);
   ajax(from.method, from.action, data, success, error);
  });
});

// helper function for sending an AJAX reques
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 500) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}