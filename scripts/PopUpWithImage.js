// child of Popup
// has to change the parent open()
//add an image to the popup and the corresponding image src attribute
//along with a caption for the image

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(".card__image");
    this._captionElement = this._popupElement.querySelector(".card__caption");
  }

  openModal(data) {
    this._imageElement.src = data.link;
    this._imageElement.alt = data.title;
    this._captionElement.textContent = data.title;
    super.open();
  }
}
