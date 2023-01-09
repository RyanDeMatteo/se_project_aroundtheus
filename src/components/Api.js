export default class Api {
  constructor({ baseUrl, headers }) {
    this.url = baseUrl;
    this.headers = headers;
  }

  _handleServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getUserData() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then(this._handleServerResponse);
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then(this._handleServerResponse);
  }

  submitUserEdit(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._handleServerResponse);
  }

  addNewCard(data) {
    return fetch(`${this.url}/cards/`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({ title: data.title, link: data.link }),
    }).then(this._handleServerResponse);
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      headers: this.headers,
      method: "DELETE",
    }).then(this._handleServerResponse);
  }

  toggleLikeStatus(id, isLiked) {
    return fetch(`${this.url}/cards/${id}`, {
      headers: this.headers,
      method: isLiked ? "DELETE" : "PUT",
    }).then(this._handleServerResponse);
  }

  updateProfilePicture(url) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then(this._handleServerResponse);
  }
}
