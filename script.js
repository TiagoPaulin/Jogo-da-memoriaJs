function gerarGrid(linhas, colunas) {
    var grid = [];
    for (var i = 0; i < linhas; i++) {
        grid.push([]);
        for (var j = 0; j < colunas; j++) {
            grid[i].push(Math.floor(Math.random() * 10)); // Preenche com valores aleatórios de 0 a 5
        }
    }
    return grid;
}

function gerarTabuleiro(qtdeCartas){
    document.write("<table>");
    if (qtdeCartas == 12) {
        var gridFacil = gerarGrid(3, 4);
        for (i = 0; i < 3; i ++){
            document.write("<tr>");
            for (j = 0; j < 4; j ++){
                document.write("<td>Oi</td>");
            }
            document.write("</tr>");
        }
    }
    if (qtdeCartas == 16) {
        var gridMedia = gerarGrid(4, 4);
        for (i = 0; i < 4; i ++){
            document.write("<tr>");
            for (j = 0; j < 4; j ++){
                document.write("<td><img src='images/backcard1.jpg' style='width:75px; height:100px;'></td>");
            }
            document.write("</tr>");
        }
    }
    if (qtdeCartas == 20) {
        var gridDificil = gerarGrid(4, 5);
        for (i = 0; i < 4; i ++){
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
        var nivel = document.getElementById("nivel");
        qtdeCartas = nivel.value;
        if (qtdeCartas == ""){
            alert("Voce deve selecionar uma dificuldade")
        } else {
            gerarTabuleiro(qtdeCartas);
        }
    }
}
