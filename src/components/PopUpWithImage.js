import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ link, title }) {
    this._imageElement = this._popupElement;
    super.setEventListeners();

    const cardImage = this._imageElement.querySelector(".modal__image");
    const cardCaption = this._imageElement.querySelector(".modal__caption");

    cardImage.src = link;
    cardImage.alt = title;
    cardCaption.textContent = title;
  }
}
