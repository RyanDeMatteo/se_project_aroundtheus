const imageModal = document.querySelector("#image-modal");

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalOnEscape);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon());
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteButton());
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPanel());
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.querySelector(".card").remove();
  }

  _handlePreviewPanel() {
    this._element.querySelector("#image-modal");
    this.cardImage.src = data.link;
    this.cardImage.alt = data.title;
    this.cardCaption.textContent = data.title;
    openModal(imageModal);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._title;

    this._setEventListeners();
  }
}

export default Card;
