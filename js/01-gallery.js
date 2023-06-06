import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
  `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const originalImage = evt.target.dataset.source;
  const descriptionItem = evt.target.alt;

  const instance = basicLightbox.create(
    `<img src="${originalImage}"  alt = "${descriptionItem}" width="800" height="600">    
`
  );
  instance.show();

  const text = document.querySelectorAll("img");
  text.forEach((el) => {
    el.style.color = "white";
    el.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  });

  document.addEventListener("keydown", closeModalWithEscape);

  function closeModalWithEscape(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

console.log(galleryItems);
