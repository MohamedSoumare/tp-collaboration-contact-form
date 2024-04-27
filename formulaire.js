form = document.getElementById("form")

form.addEventListener("submit",function(event) {
    event.preventDefault()

    let nom= document.getElementById("nom")
    let email = document.getElementById("email")
    let objet = document.getElementById("objett")
    let message = document.getElementById("message")

    if(nom=== "" || email ==="" || objet==="" || message==="") {
        alert("veuillez remplir le champ")
        return;
    }

    document.getElementById("nom").value = ""
    document.getElementById("email").value = ""
    document.getElementById("objet").value = ""
    document.getElementById("message").value = ""

})
