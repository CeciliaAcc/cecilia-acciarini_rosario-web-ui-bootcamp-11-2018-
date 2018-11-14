/*   Firts points of the 3th exercise

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
}  */

$(document).ready(function() {
    $('section.hidden').fadeIn(1000).removeClass('hidden');
   
    document.getElementById('btn').addEventListener("click", function(){
        var config = new Object();
        config.url = "http://api.icndb.com/jokes/random";
        config.callback = showJoke;
        fetchData(config);
    });
});

function showJoke(joke){
    document.getElementById('rta').innerHTML = joke.value.joke;
}

function makeACall(config) 
{
    return new Promise (function(resolve,reject)
    {
        var req = new XMLHttpRequest();
        req.open('Get', config.url, true);
        req.addEventListener("load",function() {
            if (req.readyState == 4 && req.status == 200)
            {
                console.log("Request done successfully");
                resolve(req.responseText);
                config.callback(JSON.parse(req.responseText)); 
            }
            else
            {
                reject("Error code: " + req.statusText);
                document.getElementById('rta').innerHTML="Server error: " + req.statusText; 
                document.getElementById('rta').style.color = "red";
            }
                                    
        })
        req.send(null)
    })        
}


function fetchData(config) {
    fetch(config.url)
        .then(
            function(response){
                if (response.status !== 200 ){
                    console.log("Error code: " + response.statusText);
                    document.getElementById('rta').innerHTML="Server error: " + req.statusText; 
                    document.getElementById('rta').style.color = "red";
                    return;
                }
                response.json().then(function(joke){
                config.callback(joke);
                });
            }
        )
        .catch(function(error){
            console.log('Error');
        });
}

