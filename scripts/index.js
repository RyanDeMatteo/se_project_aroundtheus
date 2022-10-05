const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  { name: "Latemar", link: "https://code.s3.yandex.net/web-code/latemar.jpg" },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const closeProfileModalButton = document.querySelector(".modal__close-button");
const editProfileModal = document.querySelector(".modal");
const editProfileForm = document.querySelector("#edit-profile-form");
const profileTitleField = document.querySelector(".profile__title");
const profileAboutField = document.querySelector(".profile__subtitle");
const profileTitleInputValue = editProfileForm.querySelector(
  ".modal__input_type_title"
);
const profileAboutInputValue = editProfileForm.querySelector(
  ".modal__input_type_about"
);

const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function openEditProfileModal() {
  profileTitleInputValue.value = profileTitleField.textContent;
  profileAboutInputValue.value = profileAboutField.textContent;
  openModal(editProfileModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function closeEditProfileModal() {
  closeModal(editProfileModal);
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
  cardImage.alt = data.name;
  cardCaption.textContent = data.name;

  return cardElement;
}

function renderCard(data) {
  const cardElement = createCard(data);
  cardListElement.prepend(cardElement);
}

editProfileButton.addEventListener("click", openEditProfileModal);
closeProfileModalButton.addEventListener("click", closeEditProfileModal);
editProfileForm.addEventListener("submit", editProfileInputs);

initialCards.forEach(renderCard);
