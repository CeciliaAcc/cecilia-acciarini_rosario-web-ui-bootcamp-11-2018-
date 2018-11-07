
$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
   }    
)

function makeACall(){
                var req = new XMLHttpRequest();
                req.open('Get', 'https://api.github.com/search/repositories?q=JavaScript', true);
                req.onreadystatechange =  function () {
                    if (req.readyState == 4 && req.status == 200){
                        console.log("Request done successfully");
                        var repo = JSON.parse(this.responseText);
                        var count = repo.items;
                        document.getElementById('rta').innerHTML += "Total Count" + api.total_count + "<p>";
                        
                        for (var i = 0; i < count.length; i++){
                           document.getElementById('rta').innerHTML += "<li>"+ [i+1]+"<p> Descripción de items:" + api.items[i]["description"];
                        }
                    }else {
                        console.log("Error loading page")
                        document.getElementById('rta').innerHTML="<span style='color:#FF0000'> hi </span>";
                        document.getElementById('rta').innerHTML += 'ERROR';
                    }
                req.open('GET', valueTosearch, true);
                req.send(null); 

                }
            }

