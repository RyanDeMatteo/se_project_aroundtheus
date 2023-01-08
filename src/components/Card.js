class Card {
  constructor(
    { data, handleImageClick, handleLikeClick, handleDeleteClick },
    cardSelector
  ) {
    this._title = data.title;
    this._link = data.link;
    this._id = data.id;
    this._likes = data.likes;
    this._isLiked = false;
    this._userId = data.currentUserId;

    if (this._likes.includes(this._userId)) {
      this._isLiked = true;
    } else {
      this._isLiked = false;
    }

    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardSelector = cardSelector;
    this._ownerId = data.owner_id;
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
    this._cardLikesCounter = this._element.querySelector(".card__like-counter");

    imageElement.src = this._link;
    imageElement.alt = this._title;
    captionElement.textContent = this._title;

    this._cardLikesCounter.textContent = `${this.likes.length}`;

    this._setEventListeners();

    return this._element;
  }

  remove() {
    this._element.remove();
  }

  updateLikes(res) {
    this.likes = res.likes;
    this._cardLikesCounter.textContent = `${this._likes.length}`;
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }

  _checkLikeStatus = () => {
    for (let i = 0; i < this.likes.length; i++) {
      if (this._likes[i]._id === this._userId) {
        this._isLiked = true;
        this._cardLikeButton.classList.toggle("card__like-button_active");
        return;
      }
    }
  };

  _checkCardOwnerId = () => {
    if (this.userId !== this._ownerId) {
      this._cardTrashButton.remove();
      this._cardTrashButton = null;
    } else {
      return;
    }
  };

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", this._handleLikeClick);

    this._cardDeleteButton.addEventListener(
      "click",
      this._handleDeleteClick(this._id)
    );

    this._cardImageButton.addEventListener("click", () =>
      this._handleImageClick({ title: this._title, link: this._link })
    );

    this._checkCardOwnerId();
    this._checkLikeStatus();
  }
}

export default Card;
