$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
});


function createTable(){
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var table   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var url = 'https://api.github.com/search/repositories?q=javascript';
    console.log(url);

    var req = new XMLHttpRequest();
    req.onreadystatechange =  function () {
        if (req.readyState == 4 && req.status == 200){
            console.log("Request done successfully");
            var repo = JSON.parse(req.responseText);
            var count = repo.items;       
            for (var i = 0; i < count.length; i++){
                // Crea las hileras de la tabla
                var row = document.createElement("tr");

                for (var j = 0; j < 4 ; j++) {
                    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                    // texto sea el contenido de <td>, ubica el elemento <td> al final
                    // de la hilera de la tabla
                    var cell = document.createElement("td");

                    switch(j)
                    {
                        case 0: var textCell = document.createTextNode(i);
                        break;
                        
                        case 1: var textCell = document.createTextNode("ID Item: " + repo.items[i]['id']);
                        break;

                        case 2: var textCell = document.createTextNode("ID Node: " + repo.items[i]['node_id']);
                        break;

                        case 3: var textCell = document.createTextNode("Description: " + repo.items[i]['description']);
                        break;

                    }
                    var textCell = document.createTextNode(repo.items +i+ repo.description +j);
                }
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

        req.open('GET',  url, true);
        req.send(null);         
    }
    
 
    




