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
import PopupWithImage from "./components/PopUpWithImage.js";
import UserInfo from "./components/UserInfo.js";

const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault;

function fillProfileForm() {
  profileTitleInputValue.value = profileTitleField.textContent;
  profileAboutInputValue.value = profileAboutField.textContent;
}
//create all instances of classes
const HandleUserInfo = new UserInfo(selectors);

const EditFormValidator = new FormValidator(config, selectors.editProfileForm);
const AddFormValidator = new FormValidator(config, selectors.addCardForm);

const CardPreviewPopup = new PopupWithImage(selectors.previewPopup);
const AddCardPopup = new PopupWithForm({
  addCardForm: "#add-card-form",
  handleFormSubmit,
});
const EditProfilePopup = new PopupWithForm({
  editProfileForm: "#edit-profile-form",
  handleFormSubmit,
});

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

// initialize all my instances
HandleUserInfo.setUserInfo({
  userName: userData.name,
  userJob: userData.about,
});

EditFormValidator.enableValidation();
AddFormValidator.enableValidation();

AddCardPopup.setEventListeners();
EditProfilePopup.setEventListeners();
CardPreviewPopup.setEventListeners();

CardSection.renderItems(initialCards);

// all the rest
//event listeners for edit button and add popup
addCardButton.addEventListener("click", () => {
  AddCardPopup.openModal();
  AddFormValidator.resetValidation();
});

editProfileButton.addEventListener("click", () => {
  EditProfilePopup.openModal();
  fillProfileForm();
  editProfileForm.resetValidation();
});

addCardForm.addEventListener("submit", () => {
  selectors.cardSection.renderElements();
});

selectors.cardSection.renderElements();

editProfileForm.addEventListener("submit", HandleUserInfo);
