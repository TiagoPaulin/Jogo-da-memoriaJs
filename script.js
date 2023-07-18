function iniciarJogo(){
    var nome = document.getElementById("username");
    var username = nome.value;
    if (username.length == 0) {
        alert("Voce precisa digitar o seu nome!");
    } else {
        var menu = document.getElementById("menu");
        menu.setAttribute("class", "invisible");
    }
}
