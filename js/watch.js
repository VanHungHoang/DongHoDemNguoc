var d = null;
var h = null;
var m = null;
var s = null;
var timeout = null;
var date = new Date();
var datenow = date.getDate();
var hournow = date.getHours();
var minutenow = date.getMinutes();
var secondnow = date.getSeconds();

function start(){
    if(hournow === null){        
        hournow = parseInt(document.getElementById("h").value);
        minutenow = parseInt(document.getElementById("m").value);
        secondnow = parseInt(document.getElementById("s").value);
    }
    if(secondnow === -1){
        minutenow--;
        secondnow=59
    }
    if(minutenow === -1){
        hournow--;
        minutenow=59;
    }
    if(hournow == -1){
        clearTimeout(timeout);
        alert('Time out');
        return false;
    }
     document.getElementById("d").value = (datenow).toString();
     document.getElementById("h").value = hournow.toString();
     document.getElementById("m").value = minutenow.toString();
     document.getElementById("s").value = secondnow.toString();
    
    
    timeout = setTimeout(function(){
        secondnow--;
        start();
    },1000);
}

function stop(){
    clearTimeout(timeout);
}