import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallety = document.querySelector(".gallery");

gallety.innerHTML = galleryItems.reduce(
  (result, { preview, original, description }) =>
    (result += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`),
  ""
);

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
