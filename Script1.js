function changePhoto() {
    document.getElementById("pic1").src = "start.png";
}

function returnPhoto(){
    document.getElementById("pic1").src = "image1.jpg";
}

function showvid() {
    document.getElementById("myphoto").style.display = "none";
    document.getElementById("vid1").style.display = "block";
}

function result() {
    var score = 0;

    if (document.getElementById('correct1').checked) {
        score++
    }

    if (document.getElementById('correct2').checked) {
        score++
    }

    if (document.getElementById('correct3').checked) {
        score++
    }

    if (document.getElementById('correct4').checked) {
        score++
    }

    if (document.getElementById('correct5').checked) {
        score++
    }

    if (document.getElementById('correct6').checked) {
        score++
    }

    if (document.getElementById('correct7').checked) {
        score++
    }

    if (document.getElementById('correct8').checked) {
        score++
    }

    if (document.getElementById('correct9').checked) {
        score++
    }

    if (document.getElementById('correct10').checked) {
        score++
    }

    if (score == 0) {
        alert("Oh no you scored: " + score)
        alert("Go over to the learn page or go over to the contact me page if you have any questions")
    }

    if (score > 0 && score < 8) {
        alert("Not bad, you scored: " + score)
        alert("Lets try get full marks next time.")
    }

    if (score == 10) {
        alert("Congrats you scored: " + score)
        alert("If you have any questions or suggestions please go over to the contact me page and send me a question")
    }
}
