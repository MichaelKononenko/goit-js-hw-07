import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallety = document.querySelector(".gallery");

gallety.innerHTML = galleryItems.reduce(
  (result, { preview, original, description }) =>
    (result += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`),
  ""
);

gallety.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  const itemElement = event.target;
  if (itemElement.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
        <img src="${itemElement.dataset.source}" width="800" height="600">
    `);
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
