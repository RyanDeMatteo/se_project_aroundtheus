import "./styles/index.css";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

import profileDefault from "./images/jacques-cousteau.jpg";

import {
  config,
  selectors,
  initialCards,
  profileName,
  profileAbout,
  addCardButton,
  addCardForm,
  editProfileButton,
} from "./components/utils/constants.js";

const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault;

function fillProfileForm() {
  const { userName, userAbout } = handleUserInfo.getUserInfo();
  profileName.value = userName;
  profileAbout.value = userAbout;
}

const handleUserInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userAboutSelector
);

const createCard = (cardObject) => {
  const card = new Card(
    {
      data: cardObject,
      handleImageClick: (imgData) => {
        cardPreviewPopup.openModal(imgData);
      },
    },
    selectors.cardTemplate
  );
  return card.getView();
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = createCard(data);
      cardSection.addItem(cardElement);
    },
  },
  "#cards-list"
);

cardSection.renderItems();

const cardPreviewPopup = new PopupWithImage(selectors.imageModal);

const addCardPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  const newCard = { title: data.title, link: data.link };
  const newCardElement = createCard(newCard);
  cardSection.addItem(newCardElement);
  addCardForm.reset();
  addCardPopup.closeModal();
});

const editProfilePopup = new PopupWithForm(
  selectors.editProfileModal,
  (data) => {
    handleUserInfo.setUserInfo({
      userName: data.name,
      userAbout: data.about,
    });
    editProfilePopup.closeModal();
  }
);

cardPreviewPopup.setEventListeners();

addCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  addCardPopup.openModal();
  addCardForm.reset();
  addFormValidator._toggleButtonState();
  addFormValidator.resetValidation();
});

editProfilePopup.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  editProfilePopup.openModal();
  editFormValidator.resetValidation();
});

const addFormValidator = new FormValidator(
  config,
  document.querySelector("#add-card-form")
);

const editFormValidator = new FormValidator(
  config,
  document.querySelector("#edit-profile-form")
);

editFormValidator.enableValidation();

addFormValidator.enableValidation();
