import Bookmark from './components/bookmark/bookmark.js';
import Card from './components/card/card.js';

const bookmarkElements = document.querySelectorAll('[data-js="bookmark"]');
const cardElements = document.querySelectorAll('[data-js="card"]');

bookmarkElements.forEach(element => {
  Bookmark(element);
});

cardElements.forEach(cardElement => {
  Card(cardElement);
});
