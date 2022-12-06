//connect Card to the popup
//Make Card that handleCardClick() function into the constructor
//when user clicks a card, this function will open popup with image
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

  getView() {
    this._element = this._getTemplate();

    const imageElement = this._element.querySelector(".card__image");
    const captionElement = this._element.querySelector(".card__caption");
    this._likeButton = this._element.querySelector(".card__like-button");
    imageElement.src = this._link;
    imageElement.alt = this._title;
    captionElement.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }

  _handleLikeIcon = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  _handleDeleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    const likeButton = this._element.querySelector(".card__like-button");
    likeButton.addEventListener("click", this._handleLikeIcon);
    const deleteButton = this._element.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", this._handleDeleteCard);
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleImageClick({ link: this._link, text: this._title })
      );
  }
}

export default Card;
