
$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
   })

document.getElementById('rta').addEventListener("click", function(){
    var show = document.getElementById('rta').value;
    var URL = "http://api.icndb.com/jokes/random" + userId;
    makeAjaxCall(URL, "GET", processResponse); 
});

function processResponse(resp){
    console.log("render user details", resp);
    }

function myFunction(config) {
    return new Promise (function(resolve,reject){
                        var req = new XMLHttpRequest();
                        req.open('Get', config.url, true);
                        req.addEventListener("load",function() {
                                        if (req.readyState == 4 && req.status == 200){
                                            console.log("Request done successfully");
                                            var resp = resolve(req.responseText);
                                            config.callback(JSON.parse(resp)); 

                                            document.getElementById('rta').innerHTML = req.responseText;

                                        }else {
                                            reject("Error loading page: " + req.statusText);
                                            document.getElementById('rta').innerHTML="Server error: " + req.statusText; 
                                            document.getElementById('rta').style.color = "red";
                                        }
                                    
                            })
                            req.send(null)
                        })        
}

/* NO ESTÁ TERMINADO */

