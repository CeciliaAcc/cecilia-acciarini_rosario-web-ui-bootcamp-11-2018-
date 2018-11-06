
$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
   })

document.getElementById('btn').addEventListener("onclick", function(){
    var showData = function(data){
        document.getElementById('rta').innerHTML = data.value.joke;
    }
    var config = new Object();
    config.url = "http://api.icndb.com/jokes/random";
    config.callback = showData;
    getFetch(config);
});

function makeACall(config) {
    return new Promise (function(resolve,reject){
                        var req = new XMLHttpRequest();
                        req.open('Get', config.url, true);
                        req.addEventListener("load",function() {
                                        if (req.readyState == 4 && req.status == 200){
                                            console.log("Request done successfully");
                                            var resp = resolve(req.responseText);
                                            config.callback(JSON.parse(resp)); 

                                        }else {
                                            reject("Error code: " + req.statusText);
                                            document.getElementById('rta').innerHTML="Server error: " + req.statusText; 
                                            document.getElementById('rta').style.color = "red";
                                        }
                                    
                            })
                            req.send(null)
                        })        
}


function getFetch(config) {
    fetch(config.url)
        .then(
            function (respose){
                if (respose.status !== 200 ){
                    console.log("Error code: " + response.statusText);
                    document.getElementById('rta').innerHTML="Server error: " + req.statusText; 
                    document.getElementById('rta').style.color = "red";
                    return;
                }
                respose.json().then(function(data){
                config.callback(data);
                });
            }
        )
        .catch(function(error){
            console.log('Error');
        });
}

