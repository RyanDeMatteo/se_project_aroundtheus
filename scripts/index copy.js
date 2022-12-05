import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";
import { config, initialCards } from "./constants.js";

export const editProfileForm = document.querySelector("#edit-profile-form");
export const addCardForm = document.querySelector("#add-card-form");

const editFormValidator = new FormValidator(config, editProfileForm);
const addFormValidator = new FormValidator(config, addCardForm);

const cardSelector = document.querySelector("#card-template");
const cardListElement = document.querySelector(".cards__list");

const addCardModal = document.querySelector("#add-card-modal");
export const imageModal = document.querySelector("#image-modal");
export const modalImageElement = imageModal.querySelector(".modal__image");
export const modalCaptionElement = imageModal.querySelector(".modal__caption");

export const addCardTitleInputValue = addCardForm.querySelector(
  ".modal__input_type_title"
);
export const addCardImageInputValue = addCardForm.querySelector(
  ".modal__input_type_image"
);

const editProfileModal = document.querySelector("#edit-profile-modal");

const profileTitleField = document.querySelector(".profile__title");
const profileAboutField = document.querySelector(".profile__subtitle");
const profileTitleInputValue = editProfileForm.querySelector(
  ".modal__input_type_name"
);
const profileAboutInputValue = editProfileForm.querySelector(
  ".modal__input_type_about"
);

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const closeModalButtons = document.querySelectorAll(".modal__close-button");

function fillProfileForm() {
  profileTitleInputValue.value = profileTitleField.textContent;
  profileAboutInputValue.value = profileAboutField.textContent;
}

function openEditProfileModal() {
  openModal(editProfileModal);
  fillProfileForm();
}

function openAddCardModal() {
  openModal(addCardModal);
}

function closeEditProfileModal() {
  closeModal(editProfileModal);
}

function closeAddCardModal() {
  closeModal(addCardModal);
}

function editProfileInputs(evt) {
  evt.preventDefault();
  profileTitleField.textContent = profileTitleInputValue.value;
  profileAboutField.textContent = profileAboutInputValue.value;
  closeEditProfileModal();
}

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

editProfileButton.addEventListener("click", openEditProfileModal);

editProfileForm.addEventListener("submit", editProfileInputs);

addCardButton.addEventListener("click", openAddCardModal);

addCardForm.addEventListener("submit", submitNewCard);

closeModalButtons.forEach((closeModalButton) => {
  const modal = closeModalButton.closest(".modal");
  closeModalButton.addEventListener("click", (evt) => {
    closeModal(modal);
  });
});

editFormValidator.enableValidation();
addFormValidator.enableValidation();

initialCards.forEach(renderCard);
