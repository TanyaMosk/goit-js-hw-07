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
// function onClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }
//   const originalImage = evt.target.dataset.source;
//   const instance = basicLightbox.create(
//     `<img src="${originalImage}"  width="800" height="600">`,
//     {
//       onShow: (instance) => {
//         window.addEventListener("keydown", closeModalWithEscape);
//       },

//       onClose: (instance) => {
//         window.removeEventListener("keydown", closeModalWithEscape);
//       },
//     }
//   );
//   instance.show();

//   function closeModalWithEscape(evt) {
//     if (evt.key === "Escape") {
//       instance.close();
//     }
//   }
// }

// console.log(galleryItems);


// === 2 === Окремо винесена ф-я closeModalWithEscape =======

// function onClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     return;
//   }
//   const originalImage = evt.target.dataset.source;
//   const instance = basicLightbox.create(
//     `<img src="${originalImage}"  width="800" height="600">`,
//     {
//       onShow: (instance) => {
//         window.addEventListener(
//           "keydown",
//           closeModalWithEscape.bind(null, instance)
//         );
//       },

//       onClose: (instance) => {
//         window.removeEventListener(
//           "keydown",
//           closeModalWithEscape.bind(null, instance)
//         );
//       },
//     }
//   );
//   instance.show();
// }
// function closeModalWithEscape(instance, evt) {
//   if (evt.key === "Escape") {
//     instance.close();
//   }
// }

const instance = basicLightbox.create(
  `<img src=""  width="800" height="600">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", closeModalWithEscape);
    },

    onClose: (instance) => {
      window.removeEventListener("keydown", closeModalWithEscape);
    },
  }
);

function onClick(evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
      return;
    }  
  instance.element().querySelector("img").src = evt.target.dataset.source;
  instance.show();
}


function closeModalWithEscape(evt) {
  if (evt.key === 'Escape') {
    instance.close();
    return;
  }
}