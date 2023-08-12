var grid; // criacao da variavel global da grid

function gerarGrid(linhas, colunas){
    grid = []; // inicializa a grid
    let id = [0,1,2,3,4,5,6,7,8,9,10,11]; // array com todos os ids possiveis das cartas
    for(i = 0; i < linhas; i ++){
        let values = []; // inicializa as linhas da grid
        for(j = 0; j < (colunas / 2); j ++){
            let indice = Math.floor(Math.random() * id.length); // gera um indice aleatorio referente aos ids das cartas
                let value = id[indice]; // armazena o id em uma variavel
                id.splice(indice, 1) // como o id ja foi utilizado, ele e removido do array de ids para evitar repeticoes 
                values.push(value, value); // adiciona o valor sorteado duas vezes seguidas na linha
        }
        grid[i] = values; // armazena na grid a linha ja populada
    }
    return grid; // retorna a grid
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
    if (qtdeCartas == 24) {
        grid = gerarGrid(4, 6);
        console.log(grid);
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
        case 10:
            return "images/card11.jpg";
            break;
        case 11:
            return "images/card12.jpg";
            break;
    }
}

var verifica_carta = 10;
var imagem1;

function revelarCarta(linha, coluna) {
    var image = document.getElementById(`file${linha}${coluna}`);
    var file = grid[linha][coluna];
    var message_field = document.getElementById("message_field");
    var message = document.createElement("b");
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
            message_field.appendChild(message);
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

console.log(grid);


