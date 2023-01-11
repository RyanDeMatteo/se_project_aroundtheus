class Card {
  constructor(
    { data, userId, handleImageClick, handleLikeClick, handleDeleteClick },
    cardSelector
  ) {
    this._data = data;
    this._title = data.name;
    this._link = data.link;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  getCardId = () => this._id;

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
    this._cardLikesCounter = this._element.querySelector(".card__like-counter");

    this._setEventListeners();

    imageElement.src = this._link;
    imageElement.alt = this._title;
    captionElement.textContent = this._title;

    this._renderLikes();

    if (this._userId !== this._ownerId) {
      this._cardDeleteButton.remove();
    }

    return this._element;
  }

  handleDeleteCard() {
    this._element.remove();
    this._element.null;
  }

  setLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }

  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _renderLikes() {
    this._cardLikesCounter.textContent = this._likes.length || "";
    if (this.isLiked()) {
      this._cardLikeButton.classList.add("card__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_active");
    }
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () =>
      this._handleLikeClick()
    );

    this._cardDeleteButton.addEventListener("click", () =>
      this._handleDeleteClick()
    );

    this._cardImageButton.addEventListener("click", () =>
      this._handleImageClick({ title: this._title, link: this._link })
    );
  }
}

export default Card;
