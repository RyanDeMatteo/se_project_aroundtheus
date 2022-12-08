import "./styles/index.css";
import profileDefault from "./images/jacques-cousteau.jpg";

import {
  config,
  selectors,
  initialCards,
  profileTitleInputValue,
  profileAboutInputValue,
} from "./components/utils/constants.js";

import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";

const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault;

function fillProfileForm() {
  const { userName, userAbout } = HandleUserInfo.setUserInfo;
  profileTitleInputValue.value = userName;
  profileAboutInputValue.value = userAbout;
}

//create all instances of classes
const CardPreviewPopup = new PopupWithImage(selectors.previewPopup);
CardPreviewPopup.setEventListeners();

const CardSection = new Section(
  {
    renderer: (data) => {
      const card = new Card(
        {
          data,
          handleImageClick: () => {
            CardPreviewPopup.openModal(data);
          },
        },
        selectors.cardTemplate
      );
      CardSection.addItem(card.getView());
    },
  },
  selectors.cardSection
);

CardSection.renderItems(initialCards);

const AddCardPopup = new PopupWithForm("#add-card-form", (data) => {
  const newCard = { name: data.title, link: data.link };
  const newCardElement = createCard(newCard);
  CardSection.addNewItem(newCardElement);
  addCardForm.closeModal();
});

AddCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  AddFormValidator._toggleButtonState();
  AddCardPopup.openModal();
  AddFormValidator.resetValidation();
});

const AddFormValidator = new FormValidator(config, selectors.addCardForm);

const HandleUserInfo = new UserInfo(selectors);

const EditProfilePopup = new PopupWithForm("#edit-profile-from", (data) => {
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
  EditProfilePopup.resetValidation();
});
// initialize all my instances

EditFormValidator.enableValidation();
AddFormValidator.enableValidation();

CardPreviewPopup.setEventListeners();

// all the rest
//event listeners for edit button and add popup

addCardForm.addEventListener("submit", () => {
  selectors.cardSection.renderItems();
});

selectors.cardSection.renderItems();
