import Popup from "./Popup.js";

export default class PopupWithFormSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector(".modal__form");
    this._saveButton = this._form.querySelector(".modal__save-button");
  }
  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  renderLoading(isLoading, loadingText = "Loading...") {
    if (isLoading) {
      this._saveButton.textContent = loadingText;
    } else {
      this._saveButton.textContent = "Save";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }
}
