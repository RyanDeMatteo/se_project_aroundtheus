//opens and closes the popup window

//constructor has single parameter (popupSelector)
//store the public open() and close() methods

//stores the private _handleEscClose()

//stores public setEventListeners("click", ) (to the close icon)
//also works on click out
import { closeModalButton } from "./utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = closeModalButton;
    console.log(this._popup);
  }

  openModal() {
    this._popup.classList.add("modal_opened");
    document.addEventListener("keydown", this.__handleCloseOnEscape);
  }

  closeModal() {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("keydown", this.__handleCloseOnEscape);
  }

  _handleCloseOnEscape(evt) {
    if (evt.key === "Escape") {
      this.closeModal();
    }
  }

  _closeModalOnClick(evt) {
    if (evt.target === this._popupElement) {
      this.closeModal();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.closeModal);
    this._popup.addEventListener("mousedown", (evt) =>
      this._closeModalOnClick(evt)
    );
  }
}
