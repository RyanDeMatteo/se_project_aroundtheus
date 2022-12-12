import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ link, title }) {
    const imageModal = this._popupElement;
    super.setEventListeners();

    const cardImage = imageModal.querySelector(".modal__image");
    const cardCaption = imageModal.querySelector(".modal__caption");

    cardImage.src = link;
    cardImage.alt = title;
    cardCaption.textContent = title;
    super.openModal();
  }
}
