import { galleryItems } from './gallery-items.js';

// 💹 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.

// 💹 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.

// 💹 3. Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».

// 💹 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map(item => 
   `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`
    ).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
galleryEl.addEventListener("click", onClick);

function onClick(event){
    event.preventDefault();
    if(!event.target.classList.contains("gallery__image")){
        return;
    }

    var lightbox = new SimpleLightbox('.gallery__link', 
    { captionsData: "alt", captionDelay: "250" });
}




