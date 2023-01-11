import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._modalForm = this._popupElement.querySelector(".modal__form");
    this._inputList = Array.from(
      this._modalForm.querySelectorAll(".modal__input")
    );
    this._saveButton = this._modalForm.querySelector(".modal__save-button");
  }

  _getInputValues() {
    const formData = {};
    this._inputList.forEach((input) => {
      formData[input.name] = input.value;
    });
    return formData;
  }

  closeModal() {
    this._modalForm.reset();
    super.closeModal();
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._saveButton.textContent = loadingText;
    } else {
      this._saveButton.textContent = "Save";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault;
      this.renderLoading(true);

      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
}
