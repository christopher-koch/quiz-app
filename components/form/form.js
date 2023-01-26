const form = document.querySelector('[data-js="form"]');
const cardList = document.querySelector('[data-js="cardList"]');
const amountLeftQuestion = document.querySelector('[data-js="amountLeftQuestion"]');
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');


function createListItems(data) {
   const question = document.createElement("h2");
   const answer = document.createElement("h3");
   const tag = document.createElement("p");
   const cardItem = document.createElement("li");
   //
   question.textContent = data.question.value;
   answer.textContent = data.answer.value;
   tag.textContent = data.tags.value;
   //
   cardItem.append(question);
   cardItem.append(answer);
   cardItem.append(tag);
   cardList.append(cardItem);
 }

form.addEventListener("input", () => {
   const amountTypedQuestion = form.question.value.length;
   const amountTypedAnswer = form.answer.value.length;
   const charactersLeftQuestion = 150 - amountTypedQuestion;
   amountLeftQuestion.innerText = charactersLeftQuestion;
   const charactersLeftAnswer = 150 - amountTypedAnswer;
   amountLeftAnswer.innerText = charactersLeftAnswer;
})

form.addEventListener("submit", (event) => {
   event.preventDefault();
   const formdata = event.target.elements;
   createListItems(formdata);
   form.reset();
  });