
function simpleCount() {
    var currTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to after each loop) i++ same as  i = i+1*/
    for (var i = 1; i < 12; i++) {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    }
}
function simpleDo() {
    var currTime = 10;
    var i = 1;
    do {

        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        i += 1;
    } while (i < 12);
}

function betterCountdown() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
function whileCount() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {


        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "READING DATA...";
    document.getElementById("data").rows["longitude"].innerHTML = "START ...";
    

}

function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full name has invalid number of characters!";
    } else if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge ID is  an invalid number!";
    } else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("indexW4.html");
    }
}

function playStation() {
    mySound = new sound("Earth_win_fire.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}
