import {
  imageModal,
  modalImageElement,
  modalCaptionElement,
  openModal,
} from "./utils.js";

class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._element = this._getTemplate();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__image").alt = this._title;
    this._element.querySelector(".card__caption").textContent = this._title;

    this._setEventListeners();

    return this._cardElement;
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
    this.modalImageElement.src = this._link;
    this.modalImageElement.alt = this._title;
    this.modalCaptionElement.textContent = this._title;
    openModal(imageModal);
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon());
    this._element
      .querySelector(".card__delete-icon")
      .addEventListener("click", () => this._handleDeleteButton());
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPanel());
  }
}

export default Card;
