var grid; // criacao da variavel global da grid

function gerarGrid(linhas, colunas) {
    var valores = []; // cria o array com os valores que vao corresponder a linha da matriz
    for (var i = 0; i <= 9; i++) {
        for (var j = 0; j < 2; j++) {
            valores.push(i); // popula o array com valores de 0 a 9 que se repetem 2 vezes
        }
    }
    for (var i = valores.length - 1; i > 0; i--) { // percorre o array de tras pra frente
        var j = Math.floor(Math.random() * (i + 1));
        var aux = valores[i]; // troca os valores da posicao i com os da posicao j usando uma variavel auxiliar para embaralhar os valores
        valores[i] = valores[j];
        valores[j] = aux;
    }
    grid = []; // grid
    var count = 0;
    for (var i = 0; i < linhas; i++) {
        grid[i] = [];
        for (var j = 0; j < colunas; j++) {
            grid[i][j] = valores[count]; // adiciona os valores embaralhados acima na grid
            count++;
        }
    }
    return grid;
}

function gerarTabuleiro(qtdeCartas){ // funcao que cria o tabuleiro 
    var tabuleiro = document.getElementById("tabuleiro");
    if (qtdeCartas == 12) {
        grid = gerarGrid(3, 4);
        for (i = 0; i < 3; i ++){
            var row = document.createElement("tr");
            for (j = 0; j < 4; j ++){
                var colum = document.createElement("td");
                var img = document.createElement("img");
                img.src = "images/backcard1.jpg";
                img.style.width = "100px";
                img.style.height = "150px";
                img.style.cursor = "pointer";
                img.id = `file${i}${j}`;
                img.onclick = function(i, j) {
                    return function() {
                        revelarCarta(i, j);
                    }
                }(i, j);
                colum.appendChild(img);
                row.appendChild(colum);
            }
            tabuleiro.appendChild(row);
        }
    }
    if (qtdeCartas == 16) {
        grid = gerarGrid(4, 4);
        for (i = 0; i < 4; i ++){
            var row = document.createElement("tr");
            for (j = 0; j < 4; j ++){
                var colum = document.createElement("td");
                var img = document.createElement("img");
                img.src = "images/backcard1.jpg";
                img.style.width = "100px";
                img.style.height = "150px";
                img.style.cursor = "pointer";
                img.id = `file${i}${j}`;
                img.onclick = function(i, j) {
                    return function() {
                        revelarCarta(i, j);
                    }
                }(i, j);
                colum.appendChild(img);
                row.appendChild(colum);
            }
            tabuleiro.appendChild(row);
        }
    }
    if (qtdeCartas == 18) {
        grid = gerarGrid(4, 6);
        for (i = 0; i < 4; i ++){
            var row = document.createElement("tr");
            for (j = 0; j < 6; j ++){
                var colum = document.createElement("td");
                var img = document.createElement("img");
                img.src = "images/backcard1.jpg";
                img.style.width = "100px";
                img.style.height = "150px";
                img.style.cursor = "pointer";
                img.id = `file${i}${j}`;
                img.onclick = function(i, j) {
                    return function() {
                        revelarCarta(i, j);
                    }
                }(i, j);
                colum.appendChild(img);
                row.appendChild(colum);
            }
            tabuleiro.appendChild(row);
        }
    }
}

function iniciarJogo(){
    var nome = document.getElementById("username");
    var username = nome.value;
    if (username.length == 0) {
        alert("Voce precisa digitar o seu nome!");
    } else {
        var nivel = document.getElementById("nivel");
        qtdeCartas = nivel.value;
        if (qtdeCartas == ""){
            alert("Voce deve selecionar uma dificuldade")
        } else {
            var menu = document.getElementById("menu");
            menu.setAttribute("class", "invisible");
            var table = document.getElementById("table");
            table.setAttribute("class", "visible");
            var title = document.getElementById("start-message");
            title.textContent = `Bem-vindo ${username}!`;
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
    var message = document.createElement("p");
    message.textContent = "Você encontrou um par de cartas!";
    message.style.color = "white";
    image.src = getImage(file);
    if (verifica_carta == 10) {
        verifica_carta = file;
        imagem1 = image;
    } else  {
        if (verifica_carta == file) {
            image.onclick = function(){};
            imagem1.onclick = function(){};
            message.class = "visible";
            table.appendChild(message);
            setTimeout(function(){
                message.remove();
            }, 1000)
        } else {
            setTimeout(function() {
                imagem1.src = "images/backcard1.jpg";
                image.src = "images/backcard1.jpg";
            }, 1000);
        }
        verifica_carta = 10;
    }
}



