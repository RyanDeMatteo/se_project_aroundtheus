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

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserData()]);
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

  addNewCard({ title, link }) {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({ name: title, link }),
    }).then(this._handleServerResponse);
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      headers: this.headers,
      method: "DELETE",
    }).then(this._handleServerResponse);
  }

  toggleLikeStatus(id, isLiked) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      headers: this.headers,
      method: isLiked ? "PUT" : "DELETE",
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

  setAvatar({ avatar }) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._handleServerResponse);
  }
}
