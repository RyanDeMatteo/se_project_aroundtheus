//opens and closes the popup window

//constructor has single parameter (popupSelector)
//store the public open() and close() methods

//stores the private _handleEscClose()

//stores public setEventListeners("click", ) (to the close icon)
//also works on click out
export default class PopUp {
  constructor(popupSelector) {
    this._popupElement = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _closeModalOnEscape(evt) {
    if (evt.key === "Escape") {
      this.closeModal();
    }
  }

  _closeModalOnRemoteClick(evt) {
    if (evt.target === evt.currentTarget) {
      this.closeModal();
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(
      ".modal__close-button"
    );
    closeButton.addEventListener("click", () => {
      this.closeModal();
    });
  }

  openModal() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._closeModalOnEscape);
    this._popupElement.addEventListener(
      "mousedown",
      this._closeModalOnRemoteClick
    );
  }

  closeModal() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._closeModalOnEscape);
    this._popupElement.removeEventListener(
      "mousedown",
      this._closeModalOnEscape
    );
  }
}
