export const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const selectors = {
  cardSection: ".cards__list",
  cardTemplate: ".card-template",
  previewPopup: "#image-modal",
  editProfileModal: "#edit-profile-modal",
  editProfileForm: "#edit-profile-form",
  addCardModal: "#add-card-modal",
  userNameSelector: ".profile__title",
  userAboutSelector: ".profile__subtitle",
  userAvatarSelector: ".profile__image",
  userAvatarModal: "#avatar-modal",
  imageModal: "#image-modal",
  deleteModal: "#delete-modal",
  avatarForm: "#avatar-form",
};

export const profile = document.querySelector(".profile");
export const profileName = document.querySelector(".profile__title");
export const profileAbout = document.querySelector(".profile__subtitle");
export const profileNameInputValue = document.querySelector(
  ".modal__input_type_name"
);
export const profileAboutInputValue = document.querySelector(
  ".modal__input_type_about"
);

export const avatarInputValue = document.querySelector(
  ".modal__input_type_avatar"
);

export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const addCardButton = document.querySelector(".profile__add-button");
export const closeModalButton = document.querySelector(".modal__close-button");
export const avatarIcon = document.querySelector(".profile__image");

export const addCardModal = document.querySelector("#card-template");
export const addCardForm = document.querySelector("#add-card-form");
/*    if (this._likes.includes(this._userId)) {
      this._isLiked = true;
    } else {
      this._isLiked = false;
    }

      updateLikes(res) {
    this.likes = res.likes;
    this._cardLikesCounter.textContent = `${this._likes.length}`;
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

    _checkLikeStatus = () => {
    for (let i = 0; i < this.likes.length; i++) {
      if (this._likes[i]._id === this._userId) {
        this._isLiked = true;
        this._cardLikeButton.classList.toggle("card__like-button_active");
        return;
      }
    }
  };

    _checkCardOwnerId = () => {
    if (this.userId !== this._ownerId) {
      this._cardTrashButton.remove();
      this._cardTrashButton = null;
    } else {
      return;
    }
  };
*/
