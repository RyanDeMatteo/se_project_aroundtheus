export default class UserInfo {
  constructor(userNameSelector, userAboutSelector, userAvatarSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userAboutElement = document.querySelector(userAboutSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      about: this._userAboutElement.textContent,
      avatar: this._userAvatarElement.src,
    };
  }

  setUserInfo({ userName, userAbout }) {
    this._userNameElement.textContent = userName;
    this._userAboutElement.textContent = userAbout;
  }

  setAvatar(userAvatar) {
    this._userAvatarElement.src = userAvatar;
  }
}
