//child class of Popup
//constructor(popupSelector, callback function)
//which opoUpWithForm calls when the form's submit events fires

//private getInputValues, collects data from all input fields and returns data as an object

//modifies setEventListeners() parent.
//must add submit handler function to the form
// and click listener for close icon

//modifies the close() parent method in order to reset the form
//once the popUp is closed

//create an instance of the PopUpWithForm class for each popup

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleSubmit = handleFormSubmit;

    this._form = this._popup.querySelector(".modal__form");
    this._inputList = Array.from(this._form.querySelectorAll(".modal__input"));
    this.saveButton = this._form.querySelector(".modal__save-button");
  }

  closeModal() {
    this._inputList.reset();

    super.closeModal();
  }

  _getInputValues() {
    const formData = {};
    this._inputList.forEach((input) => {
      formData[input.name] = input.value;
    });
    return formData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleSubmit(this._getInputValues());
    });
  }
}
