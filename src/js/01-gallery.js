// 💹 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 

// 💹 2. Реалізація делегування на ul.gallery і отримання url великого зображення.

// 💹 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

// 💹 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.

// 💹 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.


import {galleryItems} from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map(item => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`).join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);
  galleryEl.addEventListener("click", onClick);

  function onClick (event){
    event.preventDefault();
    if(!event.target.classList.contains("gallery__image")){
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, 
    {
        onShow: () => {
            document.addEventListener("keydown", onKeydown);
        },
        onClose: () => {
            document.addEventListener("keydown", onKeydown);
        },
    });
    instance.show();

    function onKeydown(event){
        if(event.code !== "Escape"){
            return;
        }
        instance.close();
    }
  }























