var correct = 0
var incorrect = 0
var unanswered = 0
var timeLeft = 40
var intervalId

function startTimer() {
    intervalId = setInterval(decrement, 1000);
}

var decrement = function() {
    timeLeft--;
    $("#time-left").text(timeLeft);
    if (timeLeft === 0) {
        clearInterval(intervalId);   
        tally();
        $(".hide").css('display', 'none');
        $(".hide2").css('display', 'unset');
        $("#wins").text(correct);
        $("#losses").text(incorrect);
        $("#ties").text(unanswered); 
        if (correct === 8) {
            $(".some-incorrect").css('display', 'none')
            $(".all-correct").css('display', 'unset')
            $("#grade").text("A (Outstanding)")
        } else if (correct === 7) {
            $("#grade").text("A- (Exceeds Expectations)")
        } else if (correct === 6) {
            $("#grade").text("B+ (Acceptable)")
        } else if (correct === 5) {
            $("#grade").text("B- (Acceptable)")
        } else if (correct === 4) {
            $("#grade").text("C+ (Poor)")
        } else if (correct === 3) {
            $("#grade").text("C- (Poor)")
        } else if (correct === 2) {
            $("#grade").text("D+ (Dreadful)")
        } else if (correct === 1) {
            $("#grade").text("D- (Dreadful)")
        } else {
            $("#grade").text("F (Troll), You Are Expelled From Hogwarts")
        }     
    }
}

$(".start").on("click", function () {
    $(".hide1").css('display', 'none');
    $(".hide").css('display', 'unset');
    startTimer();
})

$(".done").on("click", function () {
    clearInterval(intervalId)
    tally()
    $(".hide").css('display', 'none');
    $(".hide2").css('display', 'unset');
    $("#wins").text(correct);
    $("#losses").text(incorrect);
    $("#ties").text(unanswered);
    if (correct === 8) {
        $(".some-incorrect").css('display', 'none')
        $(".all-correct").css('display', 'unset')
        $("#grade").text("A (Outstanding)")
    } else if (correct === 7) {
        $("#grade").text("A- (Exceeds Expectations)")
    } else if (correct === 6) {
        $("#grade").text("B+ (Acceptable)")
    } else if (correct === 5) {
        $("#grade").text("B- (Acceptable)")
    } else if (correct === 4) {
        $("#grade").text("C+ (Poor)")
    } else if (correct === 3) {
        $("#grade").text("C- (Poor)")
    } else if (correct === 2) {
        $("#grade").text("D+ (Dreadful)")
    } else if (correct === 1) {
        $("#grade").text("D- (Dreadful)")
    } else {
        $("#grade").text("F (Troll), You Are Expelled From Hogwarts")
    }
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
    $(".q1a").css('display', 'none');
} else if (question1 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question2 === "Weasley's Wizard Wheezes") {
    correct++;
    $(".q2a").css('display', 'none');
} else if (question2 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question3 === "Ordinary Wizarding Level") {
    correct++;
    $(".q3a").css('display', 'none');
} else if (question3 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question4 === "Dentists") {
    correct++;
    $(".q4a").css('display', 'none');
} else if (question4 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question5 === "Godric Gryffindor") {
    correct++;
    $(".q5a").css('display', 'none');
} else if (question5 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question6 === "Cho Chang") {
    correct++;
    $(".q6a").css('display', 'none');
} else if (question6 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question7 === "Grunnings") {
    correct++;
    $(".q7a").css('display', 'none');
} else if (question7 === "") {
    unanswered++;
} else {
    incorrect++;
}

if (question8 === "Fleur Delacour") {
    correct++;
    $(".q8a").css('display', 'none');
} else if (question8 === "") {
    unanswered++;
} else {
    incorrect++;
}

}