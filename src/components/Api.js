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

  getInitialCards() {
    return fetch(this.baseUrl, {
      headers: this.headers,
    }).then(this._handleServerResponse);
  }

  addNewCard(data) {
    return fetch(`${this.baseUrl}/cards/`, {
      headers: this.headers,
      method: "POST",
      body: JSON.stringify({ title: data.title, link: data.link }),
    }).then(this._handleServerResponse);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      headers: this.headers,
      method: "DELETE",
    }).then(this._handleServerResponse);
  }
}
