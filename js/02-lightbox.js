import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(
  ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" width="800" height="600" />
  </a>
</li> `
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250", 
});

console.log(galleryItems);
