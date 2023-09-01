function myFunction(){
    let confirm = prompt("do you really wanna reset?");
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let city = document.getElementById("city");

    if(confirm == 'y' || confirm == 'Y'){
        name.value = ""
        surname.value="";
        city.value="";
    }
}