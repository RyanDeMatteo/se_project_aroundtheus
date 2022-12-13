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
  const { userName, userAbout } = HandleUserInfo.getUserInfo();
  profileName.value = userName;
  profileAbout.value = userAbout;
}

// user info //
const HandleUserInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userAboutSelector
);

// card creation //
const createCard = (cardObject) => {
  const card = new Card(
    {
      data: cardObject,
      handleImageClick: (imgData) => {
        CardPreviewPopup.openModal(imgData);
      },
    },
    selectors.cardTemplate
  );
  return card.getView();
};

const CardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = createCard(data);
      CardSection.addItem(cardElement);
    },
  },
  "#cards-list"
);

CardSection.renderItems();

// modal creation //
const CardPreviewPopup = new PopupWithImage("#image-modal");

const AddCardPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  const newCard = { name: data.title, link: data.link };
  const newCardElement = createCard(newCard);
  CardSection.addItem(newCardElement);
  addCardForm.reset();
  AddCardPopup.closeModal();
});

const EditProfilePopup = new PopupWithForm(
  selectors.editProfileModal,
  (data) => {
    HandleUserInfo.setUserInfo({
      userName: data.name,
      userAbout: data.about,
    });
    EditProfilePopup.closeModal();
  }
);

// modal calls //
CardPreviewPopup.setEventListeners();

AddCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  AddFormValidator._toggleButtonState();
  AddCardPopup.openModal();
});

EditProfilePopup.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  EditProfilePopup.openModal();
});

const AddFormValidator = new FormValidator(config, "#add-card-form");

const EditFormValidator = new FormValidator(config, "#edit-profile-form");

EditFormValidator.enableValidation();

AddFormValidator.enableValidation();
