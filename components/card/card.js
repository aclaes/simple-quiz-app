export default function Card(cardElement) {
  const cardButtonAnswer = cardElement.querySelector(
    '[data-js="card-button-answer"]'
  );
  const cardAnswer = cardElement.querySelector('[data-js="card-answer"]');

  let isAnswerShown = false;

  cardButtonAnswer.addEventListener('click', () => {
    isAnswerShown = !isAnswerShown;

    if (isAnswerShown) {
      cardButtonAnswer.textContent = 'Hide answer';
      cardAnswer.classList.add('card__answer--active');
    } else {
      cardButtonAnswer.textContent = 'Show answer';
      cardAnswer.classList.remove('card__answer--active');
    }
  });
}
