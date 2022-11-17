class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._form = formElement;
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this.form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this.inputElements)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }

  _hasInvalidInput() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    return !this._inputElements.every(
      (inputElement) => inputElement.validity.valid
    );
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      return this._showInputError(inputElement);
    }

    this._hideInputError(inputElement, config);
  }

  _setEventListeners() {
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._toggleButtonState(
      this._inputElements,
      this._submitButton,
      this._config
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._isValid(this._form, this.inputElement, this.config);
        this._toggleButtonState(
          this._inputElements,
          this._submitButton,
          this._config
        );
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners(this._form, this._config);
  }
}

export default FormValidator;
