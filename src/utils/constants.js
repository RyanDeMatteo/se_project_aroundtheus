export const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const initialCards = [
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

export const selectors = {
  cardSection: "cards__list",
  cardTemplate: ".card-template",
  previewPopup: "#image-modal",
  editProfileModal: "#edit-profile-modal",
  editProfileForm: "#edit-profile-form",
  addCardModal: "#add-card-modal",
  userNameSelector: ".profile__title",
  userAboutSelector: ".profile__subtitle",
  imageModal: "#image-modal",
};

export const profileName = document.querySelector(".profile__title");
export const profileAbout = document.querySelector(".profile__subtitle");
export const profileTitleInputValue = document.querySelector(
  ".modal__input_type_name"
);
export const profileAboutInputValue = document.querySelector(
  ".modal__input_type_about"
);

export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const addCardButton = document.querySelector(".profile__add-button");
export const closeModalButton = document.querySelector(".modal__close-button");

export const addCardModal = document.querySelector("#card-template");
export const addCardForm = document.querySelector("#add-card-form");
