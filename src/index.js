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

const HandleUserInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userAboutSelector
);

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

const CardPreviewPopup = new PopupWithImage(selectors.imageModal);

const AddCardPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  const newCard = { title: data.title, link: data.link };
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

CardPreviewPopup.setEventListeners();

AddCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  AddCardPopup.openModal();
  addCardForm.reset();
  AddFormValidator._toggleButtonState();
  AddFormValidator.resetValidation();
});

EditProfilePopup.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  EditProfilePopup.openModal();
  EditFormValidator.resetValidation();
});

const AddFormValidator = new FormValidator(
  config,
  document.querySelector("#add-card-form")
);

const EditFormValidator = new FormValidator(
  config,
  document.querySelector("#edit-profile-form")
);

EditFormValidator.enableValidation();

AddFormValidator.enableValidation();
