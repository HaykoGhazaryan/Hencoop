// var clickCount = 0;

// function clickHandler(evt) {

//     clickCount++;
//     console.log(evt);
//     var str = "Thanks for clicking " + clickCount;
//     this.innerText = str;

// }

// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);

// function bodyClick(evt) {

//     console.log("X " + evt.pageX + " : " + "Y " + evt.pageY);

// }

// window.onclick = bodyClick;

// function windowLoad() {

//     console.log("Window is loaded");

// }

// window.onload = windowLoad;

// function keyDown(evt) {

//     console.log("You printed " + evt.key);

// }

// window.onkeydown = keyDown;

function main() {

    var socket = io();

    var chatDiv = document.getElementById('chat');

    var input = document.getElementById('message');

    var button = document.getElementById('submit');

    function handleSubmit() {

        var val = input.value;

        if (val != "") {

            socket.emit("send message", val);

        }

    }

    button.onclick = handleSubmit;

    function handleMessage(msg) {

        var p = document.createElement('p');

        p.innerText = msg;

        chatDiv.appendChild(p);

        input.value = "";

    }

    socket.on('display message', handleMessage);

} // main closing bracket

window.onload = main;

