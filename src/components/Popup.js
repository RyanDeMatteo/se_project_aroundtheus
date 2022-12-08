//opens and closes the popup window

//constructor has single parameter (popupSelector)
//store the public open() and close() methods

//stores the private _handleEscClose()

//stores public setEventListeners("click", ) (to the close icon)
//also works on click out
export default class PopUp {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`.${popupSelector}`);
    this._closeButton = this._popupElement.querySelector(
      ".modal__close-button"
    );
  }

  openModal() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this.__handleCloseOnEscape);
  }

  closeModal() {
    this._popupElement.classList.remove("modal_opened");
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
    this._popupElement.addEventListener("mousedown", (evt) =>
      this._closeModalOnClick(evt)
    );
    this._closeButton.addEventListener("click", this.closeModal);
  }
}
