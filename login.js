$(document).ready(function(){


console.log(firebase);
$('#loginBtn').click(function(){

  let email1 =$('#loginEmail').val();
  let password1 = $('#password').val();

  !email1 ? alert("Please enter an email address") : verifiedLoginEmail = email1;
                 !password1 ? alert("Please enter an email address") : verifiedLoginPassword = password1;


                 if (email1 && password1) {

                     firebase.auth().signInWithEmailAndPassword(verifiedLoginEmail, verifiedLoginPassword)
                         .then(res => {
                             console.log(res)
                         })
                         .catch((error) => {
                             // Handle Errors here.
                             var errorCode = error.code;
                             var errorMessage = error.message;
                             // [START_EXCLUDE]
                             if (errorCode === 'auth/wrong-password') {
                                 alert('Wrong password.');
                             } else {
                                 alert(errorMessage);
                             }
                             console.log(error);
                             document.getElementById('quickstart-sign-in').disabled = false;
                             // [END_EXCLUDE]
                         });


}


})
})
