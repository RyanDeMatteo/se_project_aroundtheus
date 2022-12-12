export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`${popupSelector}`);
    console.log(this._popupElement);
    this._formElement = this._popupElement.querySelector(".modal__form");
    console.log(this._formElement);
    this._closeButtonElement = this._popupElement.querySelector(
      ".modal__close-button"
    );
  }

  openModal = () => {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this.__handleCloseOnEscape);
    this._closeButtonElement.addEventListener("click", this._handleCloseButton);
  };

  closeModal = () => {
    this._popup.classList.remove("modal_opened");
    document.removeEventListener("click", this.__handleCloseOnEscape);
    document.removeEventListener("keydown", this.__handleCloseButton);
  };

  _handleCloseButton() {
    this._popupElement.classList.remove(".modal_opened");
    this.closeModal();
  }

  _handleCloseOnEscape(evt) {
    if (evt.key === "Escape") {
      this.closeModal();
    }
  }

  _handleCloseOnClock(evt) {
    if (evt.target.classList.contains(".modal")) {
      this.closeModal();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains(".modal_opened")) {
        this.closeModal();
      }
      if (evt.target.classList.contains("modal")) {
        this.closeModal();
      }
    });
  }
}
