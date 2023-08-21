function guardarStorage(){
    let entrada = document.getElementById("inputText").value;
    localStorage.setItem("data", entrada)
}

let boton = document.getElementById("buttonText");
boton.addEventListener("click", guardarStorage); 