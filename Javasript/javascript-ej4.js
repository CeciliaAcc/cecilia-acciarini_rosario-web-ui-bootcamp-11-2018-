
$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
   }    
)

function searchText(textValue){
                var textTosearch = document.getElementById("textValue").value;
                console.log(textTosearch);
                var url = 'https://api.github.com/search/repositories?q=' + textTosearch;
                console.log(url);
                var req = new XMLHttpRequest();
                req.onreadystatechange =  function () {
                    if (req.readyState == 4 && req.status == 200){
                        console.log("Request done successfully");
                        var repo = JSON.parse(req.responseText);
                        var count = repo.items;
                        document.getElementById('rta').innerHTML+=  "Total Count: " + repo.total_count;

                        for (var i = 0; i < count.length; i++){
                           document.getElementById('rta').innerHTML += "<ul>"+ [i+1] + ") " + repo.items[i]["description"];
                        }
                    }
                           
                }
                req.open('GET',  url, true);
                req.send(null); 

            }
            

