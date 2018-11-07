$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
});

function makeAcall(){
    var req = new XMLHttpRequest();
    req.open('Get', "https://api.github.com/search/repositories", true);
    req.onreadystatechange =  function () {
        if (req.readyState == 4){
            if(req.status == 200){
            console.log("Request done successfully");
            document.getElementById('rta').innerHTML = req.responseText;
        }else {
                console.log("Error loading page");
                document.getElementById('rta').innerHTML = ("Error loading page\n");
                }
        }
    req.send(null); 
    }
}

function createTable(){
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
 
    // Crea un elemento <table> y un elemento <tbody>
    var table   = document.createElement("table");
    var tblBody = document.createElement("tbody");
 
    // Crea las celdas
    for (var i = 0; i < 2; i++) {
        // Crea las hileras de la tabla
        var row = document.createElement("tr");
            for (var j = 0; j < 2; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var cell = document.createElement("td");
            var textCell = document.createTextNode("celda en la hilera "+i+", columna "+j);
            cell.appendChild(textCell);
            row.appendChild(cell);
            }
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(row);
    }
 
    // posiciona el <tbody> debajo del elemento <table>
    table.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(table);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    table.setAttribute("border", "2");
}

// An array with three elements
var myArray = new Array(3);
// Add some data
myArray[0] = "Hello";
myArray[1] = 42;
myArray[2] = new Date(2000, 1, 1);

var myArray = new Array(3);

// Add some data
for(var i = 1; i <= 3; i++) {
    myArray[i] = new Date(2000 + i, 1, 1);
}

myArray.forEach(function (item) {
    document.write(item.getFullYear());
});

// Output:
// 2001
// 2002
// 2003