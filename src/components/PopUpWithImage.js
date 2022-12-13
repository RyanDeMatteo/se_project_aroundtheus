import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popupElement.querySelector(".modal__image");
    this._cardCaption = this._popupElement.querySelector(".modal__caption");
  }

  open({ link, title }) {
    this._cardImage.src = link;
    this._cardImage.alt = title;
    this._cardCaption.textContent = title;

    super.openModal();
  }
}
