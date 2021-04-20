var button = document.querySelector(".button-login"); 

var username = "";
var password = "";
var i = 0

button.onclick = function() {
    i = 0;
    document.querySelectorAll('.entry').forEach(function(data) {

        if(i==0){
            username = data.value;
        }
        else if (i==1){
            password = data.value;
        }

        i++;
    });

    console.log(username + " " + password)

    /*
    if(email == "" && password == ""){
        console.log("No hay nombre ni contraseña")
    }
    else if(email == "" && password == ""){
        console.log("No hay nombre")
    }
    if(email == "" && password == ""){
        console.log("No hay nombre ni contraseña")
    }
    */
}