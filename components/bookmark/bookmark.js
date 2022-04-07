export default function Bookmark(bookmarkElement) {
  bookmarkElement.addEventListener('click', () => {
    bookmarkElement.classList.toggle('bookmark--active');
  });
}
