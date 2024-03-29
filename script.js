var score = 0;
var minCeil = Math.ceil(10);
var maxFloor = Math.floor(99);
var n1;
var n2;
var timeleft;
var timer = 0;
var operation;
var ans;
window.onload = function() {
    document.getElementById("time").focus();
};
function starttimer() {
    document.getElementById("start").disabled = true;
    document.getElementById("time").disabled = true;
    timeleft = parseFloat(document.getElementById("time").value);
    timer = setInterval(function (){
        if(timeleft <= 0){
            document.getElementById("timer").innerHTML = "Time's up!";
            document.getElementById('ans').disabled = true;
        } else {
            document.getElementById("timer").innerHTML = 'Time left: ' + Math.floor(timeleft*10)/10;
        }
        timeleft -= 0.1;
    }, 100);
}
function newprob() {
    document.getElementById("ans").value = "";
    document.getElementById("ans").focus();
    operation = Math.floor(Math.random() * 2);
    // 1=add 0=subtract
    n1 = Math.floor(Math.random()*(maxFloor - minCeil) + minCeil);
    n2 = Math.floor(Math.random()*(maxFloor - minCeil) + minCeil);
    if (operation == 1) {
        document.getElementById("prob").innerHTML = n1 + ' + ' + n2;
    }
    else {
        document.getElementById("prob").innerHTML = n1 + ' - ' + n2;
    }
}
function check() {
    ans = parseFloat(document.getElementById("ans").value);
    if (operation == 1) {
        if (ans == (n1+n2)){
        score+=1;
        newprob();
        document.getElementById("score").innerHTML = score;
        }
    } else if (operation == 0) {
        if (ans == (n1-n2)){
            score+=1;
            newprob();
            document.getElementById("score").innerHTML = score;
        }
    }
}
function reset() {
    location.reload();
}
$("#ans").keyup(function (event) {
    if (event.keyCode === 13) {
        check();
    }
});
$("#time").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#start").click();
    }
});