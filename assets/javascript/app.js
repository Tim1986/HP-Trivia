var correct = 0
var incorrect = 0
var unanswered = 0
var timeLeft = 40
var intervalId

function startTimer() {
    intervalId = setInterval(decrement, 1000);
}
var endQuiz = function() {
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

var decrement = function() {
    timeLeft--;
    $("#time-left").text(timeLeft);
    if (timeLeft === 0) {
        endQuiz()
    }
}

$(".start").on("click", function () {
    $(".hide1").css('display', 'none');
    $(".hide").css('display', 'unset');
    startTimer();
})

$(".done").on("click", function () {
    endQuiz()
})

// The fact that this is an array of objects is doing nothing for me. It might as well be an array of answers.
var answers = [
    {q: "Flamel Age", a: "665"},
    {q: "Joke Shop", a: "Weasley's Wizard Wheezes"},
    {q: "OWL", a: "Ordinary Wizarding Level"},
    {q: "Grangers", a: "Dentists"},
    {q: "Sorting Hat", a: "Godric Gryffindor"},
    {q: "First Kiss", a: "Cho Chang"},
    {q: "Vernon", a: "Grunnings"},
    {q: "Veela", a: "Fleur Delacour"},
]

var questions = []

var tally = function() {
    questions.push(document.quiz.question0.value)
    questions.push(document.quiz.question1.value)
    questions.push(document.quiz.question2.value)
    questions.push(document.quiz.question3.value)
    questions.push(document.quiz.question4.value)
    questions.push(document.quiz.question5.value)
    questions.push(document.quiz.question6.value)
    questions.push(document.quiz.question7.value)

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].a === questions[i]) {
            correct++;
            $(".q" + i + "a").css('display', 'none');
        } else if (questions[i] === "") {
            unanswered++;
        } else {
            incorrect++;
        }
    }
}