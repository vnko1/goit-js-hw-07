import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

galleryContainer.addEventListener("click", onModalOpenClick);

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function onModalOpenClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  createLightBox(e.target.dataset.source);
  document.addEventListener("keydown", onCloseLightBoxEsc);
  document.addEventListener("click", onCloseLightBoxClick);
}

// function onCloseLightBox(e) {
//   document;
// }

function createLightBox(source) {
  basicLightbox
    .create(
      `
	<img src="${source}" width="800" height="600">
`,
      { closable: false }
    )
    .show();
}
