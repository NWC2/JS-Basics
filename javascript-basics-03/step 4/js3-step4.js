let pass = document.getElementById("password")
let confirm = document.getElementById("confirmation")
function checkPass(){
    if (pass.value != confirm.value){
        pass.style.border = "3px solid red";
        confirm.style.border = "3px solid red";
    }
    else{
        pass.style.border = "1px solid black";
        confirm.style.border = "1px solid black"
    }
}