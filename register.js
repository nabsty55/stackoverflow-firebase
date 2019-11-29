$(document).ready(function(){
  console.log("register");
  console.log(firebase);
  $('#registerBtn').click(function(){
    let email1 = $('#email').val();
    let userNameR = $('#usernameR').val();
    let passWordR = $('#passwordR').val();
    //console.log(email1);

    firebase.auth().createUserWithEmailAndPassword(email1, passWordR)
    .then(res =>{
        console.log(res);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });

  })
})
