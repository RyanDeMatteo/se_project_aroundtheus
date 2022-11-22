import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { editProfileForm, addCardForm, closeAddCardModal } from "./utils.js";

export const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const initialCards = [
  {
    title: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    title: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  { title: "Latemar", link: "https://code.s3.yandex.net/web-code/latemar.jpg" },
  {
    title: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
];
const editFormValidator = new FormValidator(config, editProfileForm);
const addFormValidator = new FormValidator(config, addCardForm);

const cardSelector = document.querySelector("#card-template");
const cardListElement = document.querySelector(".cards__list");

export function renderCard(data) {
  const card = new Card(data, cardSelector);
  cardListElement.prepend(card.getView());
}

export function submitNewCard(evt) {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;
  renderCard({
    title: title,
    link: link,
  });
  closeAddCardModal();
  addFormValidator.resetValidation();
}

editFormValidator.enableValidation();
addFormValidator.enableValidation();

initialCards.forEach(renderCard);
