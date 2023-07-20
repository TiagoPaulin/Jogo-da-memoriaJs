function gerarTabuleiro(qtdeCartas){
    document.write("<table>");
    if (qtdeCartas == 9) {
        for (i = 0; i < 3; i ++){
            document.write("<tr>");
            for (j = 0; j < 3; j ++){
                document.write("<td>Oi</td>");
            }
            document.write("</tr>");
        }
    }
    if (qtdeCartas == 16) {
        for (i = 0; i < 4; i ++){
            document.write("<tr>");
            for (j = 0; j < 4; j ++){
                document.write("<td>Oi</td>");
            }
            document.write("</tr>");
        }
    }
    if (qtdeCartas == 25) {
        for (i = 0; i < 5; i ++){
            document.write("<tr>");
            for (j = 0; j < 5; j ++){
                document.write("<td>Oi</td>");
            }
            document.write("</tr>");
        }
    }
    document.write("</table>");
}

function iniciarJogo(){
    var nome = document.getElementById("username");
    var username = nome.value;
    if (username.length == 0) {
        alert("Voce precisa digitar o seu nome!");
    } else {
        var menu = document.getElementById("menu");
        menu.setAttribute("class", "invisible");
        gerarTabuleiro(9);
    }
}
