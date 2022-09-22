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
  if (event.target === event.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(
    `
        <img src="${itemElement.dataset.source}">
    `,
    {
      onShown: addEscapeClose(),
      onClose: () => document.removeEventListener("keydown", close),
    }
  );
  instance.show();

  function addEscapeClose() {
    document.addEventListener(
      "keydown",
      (close = (event) => {
        if (event.key === "Escape") {
          instance.close();
        }
      })
    );
  }
}
