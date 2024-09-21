(function(){
     emailjs.init({
       publicKey: process.env.PUBLIC_KEY,
     });
  })();

function SendMail() {
    alert('Send Script')
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message: document.getElementById("message").value

    }
    emailjs.send(process.env.EMAIL_SERVICE_ID, process.env.EMAIL_TEMPLATE_ID, params).then(function (res) {
        alert("success!" + res.status)
    })
}

const buttons = document.querySelectorAll('button.email');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Email Sent!')
    SendMail();
  })
});