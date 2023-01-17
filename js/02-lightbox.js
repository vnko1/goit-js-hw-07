import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

galleryContainer.addEventListener("click", onLightBoxOpenClick);

function galleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`
    )
    .join("");
}

function onLightBoxOpenClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
