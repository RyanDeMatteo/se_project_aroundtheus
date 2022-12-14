import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import profileDefault from "../images/jacques-cousteau.jpg";

import {
  config,
  selectors,
  initialCards,
  profileNameInputValue,
  profileAboutInputValue,
  addCardButton,
  editProfileButton,
} from "../utils/constants.js";

const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault;

function fillProfileForm() {
  const { name, about } = userInfo.getUserInfo();
  profileNameInputValue.value = name;
  profileAboutInputValue.value = about;
}

function renderCard(data) {
  const cardData = createCard(data);
  cardSection.addItem(cardData);
}

const userInfo = new UserInfo(
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
      renderCard(data);
    },
  },
  "#cards-list"
);

cardSection.renderItems();

const cardPreviewPopup = new PopupWithImage(selectors.imageModal);

const addCardPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  const newCard = { title: data.title, link: data.link };
  renderCard(newCard);
  addCardPopup.closeModal();
});

const editProfilePopup = new PopupWithForm(
  selectors.editProfileModal,
  (data) => {
    userInfo.setUserInfo({
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
  addFormValidator.resetValidation();
});

editProfilePopup.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  editProfilePopup.openModal();
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
