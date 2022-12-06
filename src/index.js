import "./styles/index.css";
import profileDefault from "../src/images/jacques-cousteau.jpg";

const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault;

import { config, selectors, initialCards } from "../scripts/constants.js";
import { renderElements } from "../scripts/utils.js";

//import all classes
import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import Section from "../scripts/Section.js";
import Popup from "../scripts/Popup.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopUpWithImage.js";

//create all instances of classes
const EditFormValidator = new FormValidator(config, selectors.editProfileForm);
const AddFormValidator = new FormValidator(config, selectors.addCardForm);
const CardPreviewPopup = new PopupWithImage(selectors.previewPopup);

const CardSection = new Section(
  {
    renderer: (data) => {
      const card = new Card(
        {
          data,
          handleImageClick: (imgData) => {
            CardPreviewPopup.openModal(imgData);
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
CardSection.renderItems(initialCards);
CardPreviewPopup.setEventListeners();
EditFormValidator.enableValidation();
AddFormValidator.enableValidation();

// all the rest
//event listeners for edit button and add popup
addCardForm.addEventListener("submit", () => {
  selectors.cardSection.renderElements();
});

selectors.cardSection.renderElements();

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
