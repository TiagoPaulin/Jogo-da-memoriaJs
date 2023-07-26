function shuffleGrid(grid) {
    var linhas = grid.length;
    var colunas = grid[0].length;

    for (var i = 0; i < 1000; i++) {
        var i1 = Math.floor(Math.random() * linhas);
        var j1 = Math.floor(Math.random() * colunas);
        var i2 = Math.floor(Math.random() * linhas);
        var j2 = Math.floor(Math.random() * colunas);

        var aux = grid[i1][j1];
        grid[i1][j1] = grid[i2][j2];
        grid[i2][j2] = aux;
    }
}

function gerarGrid(linhas, colunas) {
    if (linhas == 3 || colunas == 4){
        var grid = [
            [1,1,2,2],
            [3,3,4,4],
            [5,5,6,6]
        ];
    } else if (linhas == 4 || colunas == 4){
        var grid = [
            [1,1,2,2],
            [3,3,4,4],
            [5,5,6,6],
            [7,7,8,8]
        ];
    } else {
        var grid = [
            [1,1,2,2,3],
            [3,4,4,5,5],
            [6,6,7,7,8],
            [8,9,9,0,0]
        ];
    }
    shuffleGrid(grid);
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
