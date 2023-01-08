import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithFormSubmit from "../components/PopupWithFormSubmit.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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

const api = new Api({
  baseUrl: "https://around.nomoreparties.com/v1/group-42",
  headers: {
    authorization: "fa002eaa-cfdc-49b2-ba7a-7640eb468742",
    "Content-Type": "application/json",
  },
});

let currentUserId = null;
let cardSection = null;

const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault;

const userInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userAboutSelector
);

const deletePopup = new PopupWithFormSubmit(selectors.deletePopup);
deletePopup.setEventListeners();

const createCard = (cardObject) => {
  const card = new Card(
    {
      data: { cardObject, currentUserId },
      handleImageClick: (imgData) => {
        cardPreviewPopup.openModal(imgData);
      },
      handleLikeClick: ({ id, isLiked }) => {
        api
          .toggleLikeStatus(id, isLiked)
          .then((res) => card.UpdateLikes(res))
          .then((err) => console.log(err));
      },
      handleDeleteClick: (id) => {
        deletePopup.openModal();
        deletePopup.setSubmitAction(() => {
          deletePopup.renderLoading(true);
          api
            .deleteCard(id)
            .then(() => {
              card.remove();
              deletePopup.close();
            })
            .catch((err) => console.log(err))
            .finally(() => {
              deletePopup.renderLoading(false);
            });
        });
      },
    },
    selectors.cardTemplate,
    profile.id
  );
  return card.getView();
};

function fillProfileForm() {
  const { name, about } = userInfo.getUserInfo();
  profileNameInputValue.value = name;
  profileAboutInputValue.value = about;
}

const cardPreviewPopup = new PopupWithImage(selectors.imageModal);

cardPreviewPopup.setEventListeners();

function userData() {
  api.getUserData().then((res) => {
    currentUserId = res._id;
    userInfo.setUserInfo({
      userName: res.name,
      userAbout: res.about,
      userAvatar: res.avatar,
    });
    profile.setAttribute("id", res._id);
  });
}

userData();

function renderCard(data) {
  const cardData = createCard(data);
  cardSection.addItem(cardData);
}

Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([cardsArray, userData]) => {
    userInfo.setUserInfo({
      userName: userData.name,
      userAbout: userData.about,
      userAvatar: userData.avatar,
    });
    cardSection = new Section(
      {
        items: cardsArray,
        renderer: (data) => {
          renderCard(data);
        },
      },
      "#cards-list"
    );
    cardSection.renderItems();
  })
  .catch((err) => console.log(err));

const addCardPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  const newCard = { title: data.title, link: data.link };
  api
    .addNewCard(newCard)
    .then((res) => {
      renderCard(res);
      addCardPopup.closeModal();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      addCardForm.renderLoading(false);
    });
});

addCardPopup.setEventListeners();

addCardButton.addEventListener("click", () => {
  addCardPopup.openModal();
  addFormValidator.resetValidation();
});

const addFormValidator = new FormValidator(
  config,
  document.querySelector("#add-card-form")
);

addFormValidator.enableValidation();

const editProfilePopup = new PopupWithForm(
  selectors.editProfileModal,
  (data) => {
    const updateUser = { name: data.name, about: data.description };
    api
      .submitUserEdit(updateUser)
      .then((res) => {
        userInfo.setUserInfo({ userName: res.name, userAbout: res.about });
        editProfilePopup.closeModal();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        editProfilePopup.renderLoading(false);
      });
  }
);

editProfilePopup.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  editProfilePopup.openModal();
});

const editFormValidator = new FormValidator(
  config,
  document.querySelector("#edit-profile-form")
);

editFormValidator.enableValidation();
