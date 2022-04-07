export default function Bookmark(bookmarkElement) {
  bookmarkElement.addEventListener('click', () => {
    console.log('test');
    bookmarkElement.classList.toggle('bookmark--active');
  });
}
