
$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
   }    
)

function makeAcall(){
                var req = new XMLHttpRequest();
                req.open('Get', "http://api.icndb.com/jokes/random", true);
                req.onreadystatechange =  function () {
                    if (req.readyState == 4 && req.status == 200){
                        console.log("Request done successfully");
                        document.getElementById('rta').innerHTML = req.responseText;
                    }else {
                          console.log("Error loading page");
                          document.getElementById('rta').innerHTML = ("Error loading page\n");
                          }
                    }
                req.send(null); 
}




          
