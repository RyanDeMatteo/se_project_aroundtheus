import { config, selectors, initialCards } from "./constants.js";
import { renderElements } from "./utils.js";

//import all classes
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopUpWithImage.js";

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
