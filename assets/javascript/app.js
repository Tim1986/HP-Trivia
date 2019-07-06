var correct = 0
var incorrect = 0
var unanswered = 0


$(".start").on("click", function () {
    $(".hide1").css('display', 'none');
    $(".hide").css('display', 'unset');
})

$(".done").on("click", function () {
    tally()
    $(".hide").css('display', 'none');
    $(".hide2").css('display', 'unset');
    $("#wins").text(correct);
    $("#losses").text(incorrect);
    $("#ties").text(unanswered);
})


var tally = function() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;

if (question1 === "665") {
    correct++;
} else if (question1 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question2 === "Weasley's Wizard Wheezes") {
    correct++;
} else if (question2 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question3 === "Ordinary Wizarding Level") {
    correct++;
} else if (question3 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question4 === "Dentists") {
    correct++;
} else if (question4 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question5 === "Godric Gryffindor") {
    correct++;
} else if (question5 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question6 === "Cho Chang") {
    correct++;
} else if (question6 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question7 === "Grunnings") {
    correct++;
} else if (question7 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question8 === "Fleur Delacour") {
    correct++;
} else if (question8 === "") {
    unanswered++;
} else {
    incorrect++;
}

}