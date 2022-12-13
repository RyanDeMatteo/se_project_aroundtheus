import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popupElement.querySelector(".modal__image");
    this._cardCaption = this._popupElement.querySelector(".modal__caption");
  }

  openModal(data) {
    this._cardImage.src = data.link;
    this._cardImage.alt = data.title;
    this._cardCaption.textContent = data.title;

    super.openModal();
  }
}
