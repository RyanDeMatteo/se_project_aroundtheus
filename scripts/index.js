const initialCards = [
  {
    title: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    title: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  { title: "Latemar", link: "https://code.s3.yandex.net/web-code/latemar.jpg" },
  {
    title: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = document.querySelector("#edit-profile-form");
const profileTitleField = document.querySelector(".profile__title");
const profileAboutField = document.querySelector(".profile__subtitle");
const profileTitleInputValue = editProfileForm.querySelector(
  ".modal__input_type_name"
);
const profileAboutInputValue = editProfileForm.querySelector(
  ".modal__input_type_about"
);

const addCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = document.querySelector("#add-card-form");
const addCardTitleField = document.querySelector(".card__caption");
const addCardImageField = document.querySelector(".card__image");
const addCardTitleInputValue = addCardForm.querySelector(
  ".modal__input_type_title"
);
const addCardImageInputValue = addCardForm.querySelector(
  "modal__input_type_image"
);

const imageModal = document.querySelector("#image-modal");
const modalImageElement = imageModal.querySelector(".modal__image");
const modalCaptionElement = imageModal.querySelector(".modal__caption");

const closeModalButtons = document.querySelectorAll(".modal__close-button");

const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function fillProfileForm() {
  profileTitleInputValue.value = profileTitleField.textContent;
  profileAboutInputValue.value = profileAboutField.textContent;
}

function openEditProfileModal() {
  openModal(editProfileModal);
  fillProfileForm();
}

function openAddCardModal() {
  openModal(addCardModal);
  toggleButtonState(inputElements, submitButton, {
    inactiveButtonClass: "modal__save-button_disabled",
  });
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function closeEditProfileModal() {
  closeModal(editProfileModal);
}

function closeAddCardModal() {
  closeModal(addCardModal);
}

function editProfileInputs(evt) {
  evt.preventDefault();
  profileTitleField.textContent = profileTitleInputValue.value;
  profileAboutField.textContent = profileAboutInputValue.value;
  closeEditProfileModal();
}

function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardCaption = cardElement.querySelector(".card__caption");
  cardImage.src = data.link;
  cardImage.alt = data.title;
  cardCaption.textContent = data.title;

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  cardImage.addEventListener("click", () => {
    modalImageElement.src = data.link;
    modalImageElement.alt = data.title;
    modalCaptionElement.textContent = data.title;
    openModal(imageModal);
  });

  const cardDeleteButton = cardElement.querySelector(".card__delete-icon");
  cardDeleteButton.addEventListener("click", () => {
    const listItem = cardDeleteButton.closest(".card");
    listItem.remove();
  });

  return cardElement;
}

function renderCard(data) {
  const cardElement = createCard(data);
  cardListElement.prepend(cardElement);
}

editProfileButton.addEventListener("click", openEditProfileModal);

editProfileForm.addEventListener("submit", editProfileInputs);

addCardButton.addEventListener("click", openAddCardModal);

addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;
  renderCard({
    title: title,
    link: link,
  });
  closeAddCardModal();
  evt.target.reset();
});

closeModalButtons.forEach((closeModalButton) => {
  const modal = closeModalButton.closest(".modal");
  closeModalButton.addEventListener("click", (evt) => {
    closeModal(modal);
  });
});

initialCards.forEach(renderCard);
