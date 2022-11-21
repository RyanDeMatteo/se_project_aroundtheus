import { submitNewCard } from "./index.js";

export const addCardModal = document.querySelector("#add-card-modal");
export const imageModal = document.querySelector("#image-modal");
export const modalImageElement = imageModal.querySelector(".modal__image");
export const modalCaptionElement = imageModal.querySelector(".modal__caption");

export const editProfileForm = document.querySelector("#edit-profile-form");
export const addCardForm = document.querySelector("#add-card-form");

const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardElement = cardTemplate.cloneNode(true);
const cardImage = cardElement.querySelector(".card__image");

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

/* modal toggle functions */

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalOnEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

function openEditProfileModal() {
  openModal(editProfileModal);
  fillProfileForm();
}

function openAddCardModal() {
  openModal(addCardModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalOnEscape);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

function closeEditProfileModal() {
  closeModal(editProfileModal);
}

export function closeAddCardModal() {
  closeModal(addCardModal);
}

function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

function fillProfileForm() {
  profileTitleInputValue.value = profileTitleField.textContent;
  profileAboutInputValue.value = profileAboutField.textContent;
}

function editProfileInputs(evt) {
  evt.preventDefault();
  profileTitleField.textContent = profileTitleInputValue.value;
  profileAboutField.textContent = profileAboutInputValue.value;
  closeEditProfileModal();
}

/* event listeners */

cardImage.addEventListener("click", () => {
  modalImageElement.src = data.link;
  modalImageElement.alt = data.title;
  modalCaptionElement.textContent = data.title;
  openModal(imageModal);
});

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
