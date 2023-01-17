import { galleryItems } from "./gallery-items.js";

let instance;

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

  instance = createLightBox(e.target.dataset.source);
  instance.show();
  window.addEventListener("keydown", onEscCloseLightBox);
}

function createLightBox(source) {
  return basicLightbox.create(
    `
	<img src="${source}" width="800" height="600">
`
  );
}

function onEscCloseLightBox(e) {
  if (e.code === "Escape") {
    instance.close();
    removeEventListener();
  }
}

function removeEventListener() {
  window.removeEventListener("keydown", onEscCloseLightBox);
}
