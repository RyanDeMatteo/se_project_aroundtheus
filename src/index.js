import "./styles/index.css";
import profileDefault from "./images/jacques-cousteau.jpg";

import {
  config,
  selectors,
  initialCards,
  profileTitleInputValue,
  profileAboutInputValue,
  addCardButton,
  editProfileButton,
} from "./components/utils/constants.js";

import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault;

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

function fillProfileForm() {
  const { userName, userAbout } = HandleUserInfo.setUserInfo;
  profileTitleInputValue.value = userName;
  profileAboutInputValue.value = userAbout;
}

const CardPreviewPopup = new PopupWithImage("#image-modal");

CardPreviewPopup.setEventListeners();

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

const AddCardPopup = new PopupWithForm("#add-card-form", (data) => {
  const newCard = { name: data.title, link: data.link };
  const newCardElement = createCard(newCard);
  CardSection.addNewItem(newCardElement);
  AddCardPopup.closeModal();
});

AddCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  AddFormValidator._toggleButtonState();
  AddCardPopup.openModal();
});

const AddFormValidator = new FormValidator(config, selectors.addCardForm);

const HandleUserInfo = new UserInfo(selectors);

const EditProfilePopup = new PopupWithForm("#edit-profile-form", (data) => {
  UserInfo.setUserInfo({
    userName: data.title,
    userAbout: data.about,
  });
  EditProfilePopup.closeModal();
});

EditProfilePopup.setEventListeners();

const EditFormValidator = new FormValidator(config, selectors.editProfileForm);

editProfileButton.addEventListener("click", () => {
  EditProfilePopup.openModal();
  fillProfileForm();
});

EditFormValidator.enableValidation();
AddFormValidator.enableValidation();
