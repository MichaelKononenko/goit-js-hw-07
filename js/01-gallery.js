import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallety = document.querySelector(".gallery");

gallety.innerHTML = galleryItems.reduce((result, { preview, original, description }) => {
  return (result += `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`);
}, "");

const galleryLinks = document.querySelectorAll(".gallery__link");
galleryLinks.forEach((link) => link.addEventListener("click", openModal));

function openModal(event) {
  event.preventDefault();
  const itemElement = event.target;
  const dataSource = itemElement.dataset.source;

  const instance = basicLightbox.create(`
        <img src="${dataSource}" width="1000" height="1000">
    `);
  instance.show();

  const modal = document.querySelector(".basicLightbox");
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.classList.remove("basicLightbox--visible");
    }
  });
}
