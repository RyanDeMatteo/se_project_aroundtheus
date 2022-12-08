// child of Popup
// has to change the parent open()
//add an image to the popup and the corresponding image src attribute
//along with a caption for the image

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".modal__image");
    this._captionElement = this._popup.querySelector(".modal__caption");
  }

  openModal({ link, title }) {
    this._imageElement.src = link;
    this._imageElement.alt = title;
    this._captionElement.textContent = title;
    super.openModal();
  }
}
