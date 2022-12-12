class Card {
  constructor({ data, handleImageClick }, cardSelector) {
    this._title = data.title;
    this._link = data.link;
    this._handleImageClick = handleImageClick;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode(true);
  }
  _handleLikeIcon = () => {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  };

  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon);

    this._element
      .querySelector(".card__delete-icon")
      .addEventListener("click", () => this._handleDeleteCard);

    /* this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleImageClick({ link: this._link, text: this._title })
      ); */
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const imageElement = this._element.querySelector(".card__image");
    const captionElement = this._element.querySelector(".card__caption");

    imageElement.src = this._link;
    imageElement.alt = this._title;
    captionElement.textContent = this._title;

    return this._element;
  }
}

export default Card;
