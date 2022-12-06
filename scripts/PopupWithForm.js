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
  constructor({ popUpSelector, handleFormSubmit }) {
    this._form = this._popupElement.querySelector(".modal__form");
    this._popupForm = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputList = Array.from(
      this._popupElement.querySelectorAll(".modal__input")
    );
    const data = {};
    inputList.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;
  }

  openModal() {
    super.openModal();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmitHandler(this._getInputValues());
    });
  }

  closeModal() {
    super.closeModal();
    this._inputList.reset();
  }
}
