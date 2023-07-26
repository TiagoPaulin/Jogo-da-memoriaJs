var grid;

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
        grid = [
            [1,1,2,2],
            [3,3,4,4],
            [5,5,6,6]
        ];
    } else if (linhas == 4 || colunas == 4){
        grid = [
            [1,1,2,2],
            [3,3,4,4],
            [5,5,6,6],
            [7,7,8,8]
        ];
    } else {
        grid = [
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
        grid = gerarGrid(3, 4);
        for (i = 0; i < 3; i ++){
            document.write("<tr>");
            for (j = 0; j < 4; j ++){
                document.write(`<td><img src='images/backcard1.jpg' style='width:100px; height:150px;' id='file${i}${j}' onclick='revelarCarta(${i},${j})'></td>`);
            }
            document.write("</tr>");
        }
    }
    if (qtdeCartas == 16) {
        grid = gerarGrid(4, 4);
        for (i = 0; i < 4; i ++){
            document.write("<tr>");
            for (j = 0; j < 4; j ++){
                document.write(`<td><img src='images/backcard1.jpg' style='width:100px; height:150px;' id='file${i}${j}' onclick='revelarCarta(${i},${j})'></td>`);
            }
            document.write("</tr>");
        }
    }
    if (qtdeCartas == 20) {
        grid = gerarGrid(4, 5);
        for (i = 0; i < 4; i ++){
            document.write("<tr>");
            for (j = 0; j < 5; j ++){
                document.write(`<td><img src='images/backcard1.jpg' style='width:100px; height:150px;' id='file${i}${j}' onclick='revelarCarta(${i},${j})'></td>`);
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

function getImage(file){
    switch(file){
        case 0:
            return "images/card10.jpg";
            break;
        case 1:
            return "images/card1.jpg";
            break;
        case 2:
            return "images/card2.jpg";
            break;
        case 3:
            return "images/card3.jpg";
            break;
        case 4:
            return "images/card4.jpg";
            break;
        case 5:
            return "images/card5.jpg";
            break;
        case 6:
            return "images/card6.jpg";
            break;
        case 7:
            return "images/card7.jpg";
            break;
        case 8:
            return "images/card8.jpg";
            break;
        case 9:
            return "images/card9.jpg";
            break;
    }
}

var verifica_carta = 10;
var imagem1;

function revelarCarta(linha, coluna) {
    var image = document.getElementById(`file${linha}${coluna}`);
    var file = grid[linha][coluna];
    image.src = getImage(file);
    if (verifica_carta == 10) {
        verifica_carta = file;
        imagem1 = image;
    } else {
        if (verifica_carta == file) {
        document.write("Voce encontrou um parde cartas");
        }  else {
            setTimeout(function() {
                imagem1.src = "images/backcard1.jpg";
                image.src = "images/backcard1.jpg";
            }, 1000); // Tempo em milissegundos 
        }
        verifica_carta = 10;
    }
}



