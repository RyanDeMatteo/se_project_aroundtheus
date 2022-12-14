class Card {
  constructor({ data, handleImageClick }, cardSelector) {
    this._data = data;
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

  getView() {
    this._element = this._getTemplate();

    const imageElement = this._element.querySelector(".card__image");
    const captionElement = this._element.querySelector(".card__caption");
    this._cardLikeButton = this._element.querySelector(".card__like-button");
    this._cardDeleteButton = this._element.querySelector(".card__delete-icon");
    this._cardImageButton = this._element.querySelector(".card__image");

    imageElement.src = this._link;
    imageElement.alt = this._title;
    captionElement.textContent = this._title;
    this._setEventListeners();

    return this._element;
  }

  _handleLikeIcon = () => {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  };

  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", this._handleLikeIcon);

    this._cardDeleteButton.addEventListener("click", this._handleDeleteCard);

    this._cardImageButton.addEventListener("click", () =>
      this._handleImageClick(this._data)
    );
  }
}

export default Card;
