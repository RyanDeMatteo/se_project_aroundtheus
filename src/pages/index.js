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
  profile,
  profileNameInputValue,
  profileAboutInputValue,
  addCardButton,
  editProfileButton,
  addCardForm,
  avatarIcon,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "fa002eaa-cfdc-49b2-ba7a-7640eb468742",
    "Content-Type": "application/json",
  },
});

let userId = null;
let cardSection = null;

/* const profilePicture = document.getElementById("profile-image");
profilePicture.src = profileDefault; */

const userInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userAboutSelector,
  selectors.userAvatarSelector
);

const createCard = (data, userId) => {
  const card = new Card(
    {
      data: data,
      userId: userId,
      handleImageClick: (imgData) => {
        cardPreviewPopup.openModal(imgData);
      },
      handleDeleteClick: () => {
        const id = card.getCardId();
        deletePopup.openModal();
        deletePopup.setSubmitAction(() => {
          deletePopup.renderLoading(true);
          api
            .deleteCard(id)
            .then(() => {
              card.handleDeleteCard();
              deletePopup.closeModal();
            })
            .catch((err) => console.log(err))
            .finally(() => {
              deletePopup.renderLoading(false);
            });
        });
      },
      handleLikeClick: ({ id, isLiked }) => {
        api
          .toggleLikeStatus(card.getCardId(), !card.isLiked())
          .then((res) => card.UpdateLikes(res.likes))
          .then((err) => console.log(err));
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

api.getAppInfo().then(([cardsArray, userData]) => {
  userInfo.setUserInfo({
    userName: userData.name,
    userAbout: userData.about,
  });

  const userAvatar = userData.avatar;
  userInfo.setAvatar(userAvatar);

  userId = userData._id;
  cardSection = new Section(
    {
      items: cardsArray,
      renderer: (data) => {
        const card = createCard(data, userId);
        cardSection.addNewItem(card);
      },
    },
    selectors.cardSection
  );
  cardSection.renderItems();
});

const addCardPopup = new PopupWithForm(selectors.addCardModal, (data) => {
  addCardPopup.renderLoading(true);
  api
    .addNewCard(data)
    .then((data) => {
      const card = createCard(data, data.owner_id);
      cardSection.addItem(card);
      addCardForm.reset();
      addCardPopup.closeModal();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      addCardPopup.renderLoading(false);
    });
});

const avatarModal = new PopupWithForm(selectors.userAvatarModal, (avatar) => {
  avatarModal.renderLoading(true);
  api
    .setAvatar(avatar)
    .then((avatar) => {
      userInfo.setAvatar(avatar);
      avatarModal.closeModal();
    })
    .catch((err) => console.log(err))
    .finally(() => avatarModal.renderLoading(false));
});

const editProfilePopup = new PopupWithForm(
  selectors.editProfileModal,
  (data) => {
    const updateUser = {
      name: data.name,
      about: data.about,
      avatar: data.avatar,
    };
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

const deletePopup = new PopupWithFormSubmit(selectors.deleteModal);
deletePopup.setEventListeners();

const cardPreviewPopup = new PopupWithImage(selectors.imageModal);

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
cardPreviewPopup.setEventListeners();
deletePopup.setEventListeners();
avatarModal.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  editProfilePopup.openModal();
});

addCardButton.addEventListener("click", () => {
  addCardPopup.openModal();
  addFormValidator.resetValidation();
});

avatarIcon.addEventListener("click", () => {
  avatarModal.openModal();
  avatarValidator.resetValidation();
});

const addFormValidator = new FormValidator(
  config,
  document.querySelector("#add-card-form")
);
const editFormValidator = new FormValidator(
  config,
  document.querySelector("#edit-profile-form")
);
const avatarValidator = new FormValidator(
  config,
  document.querySelector("#avatar-form")
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarValidator.enableValidation();

/* function userData() {
  api.getUserData().then((res) => {
    userId = res._id;
    userInfo.setUserInfo({
      userName: res.name,
      userAbout: res.about,
      userAvatar: res.avatar,
    });
    profile.setAttribute("id", res._id);
  });
}

userData();*/
