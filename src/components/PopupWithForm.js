import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._modalForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._modalForm.querySelectorAll(".modal__input");
  }

  _getInputValues() {
    this._formData = {};
    this._inputList.forEach(
      (input) => (this._formData[input.name] = input.value)
    );

    return this._formData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault;
      this._handleSubmit(this._getInputValues());
    });
  }

  closeModal() {
    this._modalForm.reset();
    super.closeModal();
  }
}
