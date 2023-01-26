// phew… not a lot going on here. Please add some code!
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer-card"]');


bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", () => {
    answer.classList.toggle("card__answer--active");
    console.log(answerButton.innerHTML);
    if(answerButton.innerHTML == "Hide Answer") {
        answerButton.innerHTML = "Show Answer"
    } else {
        answerButton.innerHTML = "Hide Answer"
    };
});


