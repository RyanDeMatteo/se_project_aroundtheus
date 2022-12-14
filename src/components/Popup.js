export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButtonElement = this._popupElement.querySelector(
      ".modal__close-button"
    );
  }

  openModal() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleCloseOnEscape);
  }

  closeModal = () => {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleCloseOnEscape);
  };

  _handleCloseOnEscape = (evt) => {
    if (evt.key === "Escape") {
      this.closeModal();
    }
  };

  _handleCloseOnClick(evt) {
    if (evt.target === this._popupElement) {
      this.closeModal();
    }
  }

  setEventListeners() {
    this._closeButtonElement.addEventListener("click", () => this.closeModal());
    this._popupElement.addEventListener("mousedown", (evt) =>
      this._handleCloseOnClick(evt)
    );
  }
}
