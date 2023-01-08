import Popup from "./Popup.js";

export default class PopupWithFormSubmit extends Popup {
  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }

  renderLoading(isLoading, loadingText = "Loading...") {
    const form = this._popupElement.querySelector(".modal__form");
    const saveButton = form.querySelector("popup__save-button");
    if (isLoading) {
      saveButton.textContent = loadingText;
    } else {
      saveButton.textContent = "Save";
    }
  }
}
