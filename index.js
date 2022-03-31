const cardButtonShowAnswer = document.querySelector(
  '[data-js="card-button-show"]'
);
const cardButtonHideAnswer = document.querySelector(
  '[data-js="card-button-hide"]'
);
const cardButtonBookmark = document.querySelector(
  '[data-js="card-button-bookmark"]'
);
const cardAnswer = document.querySelector('[data-js="card-answer"]');

console.log(cardButtonShowAnswer);
console.log(cardButtonHideAnswer);

cardButtonShowAnswer.addEventListener("click", () => {
  cardButtonShowAnswer.classList.remove("card__button-answer--active");
  cardButtonHideAnswer.classList.add("card__button-answer--active");
  cardAnswer.classList.add("card__answer--active");
});

cardButtonHideAnswer.addEventListener("click", () => {
  cardButtonShowAnswer.classList.add("card__button-answer--active");
  cardButtonHideAnswer.classList.remove("card__button-answer--active");
  cardAnswer.classList.remove("card__answer--active");
});

cardButtonBookmark.addEventListener("click", () => {
  cardButtonBookmark.classList.toggle("card__button-bookmark--active");
});
