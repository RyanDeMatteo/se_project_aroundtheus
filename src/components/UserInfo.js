//renders information about the user on the page
//takes an object with the selectors of two elements in constr
//(users name, users job)

//public getUserInfo()
//returns an object with information about the user
//useful for case when it's necessary to display user data in the open form

//create an instance of UserInfo class in index.js
//use setUserInfo() to handle the form submission inside of PopWithForm class
export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userAboutElement = document.querySelector(userAboutSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userAbout: this._userAboutElement.textContent,
    };
  }

  setUserInfo() {
    //new user data and adds to the page
    this._userNameElement.textContent = userName;
    this._userAboutElement.textContent = userAbout;
  }
}
