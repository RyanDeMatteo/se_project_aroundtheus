!function(){"use strict";const e={inputSelector:".modal__input",submitButtonSelector:".modal__save-button",inactiveButtonClass:"modal__save-button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},t=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".modal__input_type_name")),s=document.querySelector(".modal__input_type_about"),r=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button");document.querySelector(".modal__close-button"),document.querySelector("#card-template"),document.querySelector("#add-card-form");var o=class{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t,this._inputElements=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}_showInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_toggleInputError(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_hasInvalidInput(){return!this._inputElements.every((e=>e.validity.valid))}_toggleButtonState(){this._hasInvalidInput(this.inputElements)?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}_setEventListeners(){this._toggleButtonState(this._inputElements,this._submitButton,e),this._inputElements.forEach((t=>{t.addEventListener("input",(s=>{this._toggleInputError(t),this._toggleButtonState(this._inputElements,this._submitButton,e)}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners(this._form,e)}resetValidation(){this._toggleButtonState()}};function i(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var r=s.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class l{constructor(e){var t,s,r;t=this,r=e=>{"Escape"===e.key&&this.closeModal()},(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var r=s.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(s="_handleCloseOnEscape"))in t?Object.defineProperty(t,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[s]=r,this._popupElement=document.querySelector(e),this._closeButtonElement=this._popupElement.querySelector(".modal__close-button")}openModal(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleCloseOnEscape)}closeModal(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleCloseOnEscape)}_handleCloseOnClick(e){e.target===this._popupElement&&this.closeModal()}setEventListeners(){this._closeButtonElement.addEventListener("click",(()=>this.closeModal())),this._popupElement.addEventListener("mousedown",(e=>this._handleCloseOnClick(e)))}}class a extends l{constructor(e,t){super(e),this._handleFormSubmit=t,this._modalForm=this._popupElement.querySelector(".modal__form"),this._inputList=Array.from(this._modalForm.querySelectorAll(".modal__input"))}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}closeModal(){console.log(this._modalForm),this._modalForm.reset(),super.closeModal()}setEventListeners(){super.setEventListeners(),this._modalForm.addEventListener("submit",(e=>{e.preventDefault;const t=this._getInputValues();this._handleFormSubmit(t)}))}}function u(e){const t=d(e);_.addItem(t)}document.getElementById("profile-image").src="bbe7c5b6093ec0273de1.jpg";const c=new class{constructor(e,t){this._userNameElement=document.querySelector(e),this._userAboutElement=document.querySelector(t)}getUserInfo(){return{name:this._userNameElement.textContent,about:this._userAboutElement.textContent}}setUserInfo(e){let{userName:t,userAbout:s}=e;this._userNameElement.textContent=t,this._userAboutElement.textContent=s}}(".profile__title",".profile__subtitle"),d=e=>new class{constructor(e,t){let{data:s,handleImageClick:r}=e;i(this,"_handleLikeIcon",(()=>{this._cardLikeButton.classList.toggle("card__like-button_active")})),i(this,"_handleDeleteCard",(()=>{this._element.remove(),this._element=null})),this._data=s,this._title=s.title,this._link=s.link,this._handleImageClick=r,this._cardSelector=t}_getTemplate(){return document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0)}getView(){this._element=this._getTemplate();const e=this._element.querySelector(".card__image"),t=this._element.querySelector(".card__caption");return this._cardLikeButton=this._element.querySelector(".card__like-button"),this._cardDeleteButton=this._element.querySelector(".card__delete-icon"),this._cardImageButton=this._element.querySelector(".card__image"),e.src=this._link,e.alt=this._title,t.textContent=this._title,this._setEventListeners(),this._element}_setEventListeners(){this._cardLikeButton.addEventListener("click",this._handleLikeIcon),this._cardDeleteButton.addEventListener("click",this._handleDeleteCard),this._cardImageButton.addEventListener("click",(()=>this._handleImageClick(this._data)))}}({data:e,handleImageClick:e=>{m.openModal(e)}},".card-template").getView(),_=new class{constructor(e,t){let{items:s,renderer:r}=e;this._items=s,this._renderer=r,this._container=document.querySelector(t)}renderItems(){this._items.forEach(this._renderer)}addItem(e){this._container.prepend(e)}addNewItem(e){this._container.append(e)}}({items:[{title:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"},{title:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{title:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{title:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{title:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{title:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"}],renderer:e=>{u(e)}},"#cards-list");_.renderItems();const m=new class extends l{constructor(e){super(e),this._cardImage=this._popupElement.querySelector(".modal__image"),this._cardCaption=this._popupElement.querySelector(".modal__caption")}openModal(e){let{title:t,link:s}=e;this._cardImage.src=s,this._cardImage.alt=t,this._cardCaption.textContent=t,super.openModal()}}("#image-modal"),h=new a("#add-card-modal",(e=>{u({title:e.title,link:e.link}),h.closeModal()})),p=new a("#edit-profile-modal",(e=>{c.setUserInfo({userName:e.name,userAbout:e.about}),p.closeModal()}));m.setEventListeners(),h.setEventListeners(),n.addEventListener("click",(()=>{h.openModal(),v.resetValidation()})),p.setEventListeners(),r.addEventListener("click",(()=>{!function(){const{name:e,about:r}=c.getUserInfo();t.value=e,s.value=r}(),p.openModal()}));const v=new o(e,document.querySelector("#add-card-form"));new o(e,document.querySelector("#edit-profile-form")).enableValidation(),v.enableValidation(),new class{constructor(e){let{baseUrl:t,headers:s}=e;this.url=t,this.headers=s}_handleServerResponse(e){return e.ok?e.json():Promise.reject(`Error ${e.status}`)}getInitialCards(){return fetch("https:/around.nomoreparties.co/v1/group-42/cards",{headers:this.headers}).then(this._handleServerResponse)}}({baseUrl:"https://nomoreparties.com/v1/group-42",headers:{authorization:"fa002eaa-cfdc-49b2-ba7a-7640eb468742","Content-Type":"application/json"}})}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0MsY0FBYyxtQkFHQyxJQUFJbUksRUFDNUIzSSxFQUNBTyxTQUFTQyxjQUFjLHVCQUdQd0MsbUJBRWxCeUYsRUFBaUJ6RixtQkFFTCxJS2xIRyxNQUNicEMsWUFBWSxHQUFzQixJQUF0QixRQUFFZ0ksRUFBTyxRQUFFQyxHQUFTLEVBQzlCL0gsS0FBS2dJLElBQU1GLEVBQ1g5SCxLQUFLK0gsUUFBVUEsQ0FDakIsQ0FFQUUsc0JBQXNCQyxHQUNwQixPQUFJQSxFQUFJQyxHQUNDRCxFQUFJRSxPQUVOQyxRQUFRQyxPQUFRLFNBQVFKLEVBQUlLLFNBQ3JDLENBRUFDLGtCQUNFLE9BQU9DLE1BQU0sbURBQW9ELENBQy9EVixRQUFTL0gsS0FBSytILFVBQ2JXLEtBQUsxSSxLQUFLaUksc0JBR2YsR0wrRmtCLENBQ2xCSCxRQUFTLHdDQUNUQyxRQUFTLENBQ1BZLGNBQWUsdUNBQ2YsZUFBZ0IscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9BcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX3NhdmUtYnV0dG9uXCIsXHJcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fc2F2ZS1idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHsgdGl0bGU6IFwiTGF0ZW1hclwiLCBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xyXG4gIGNhcmRTZWN0aW9uOiBcImNhcmRzX19saXN0XCIsXHJcbiAgY2FyZFRlbXBsYXRlOiBcIi5jYXJkLXRlbXBsYXRlXCIsXHJcbiAgcHJldmlld1BvcHVwOiBcIiNpbWFnZS1tb2RhbFwiLFxyXG4gIGVkaXRQcm9maWxlTW9kYWw6IFwiI2VkaXQtcHJvZmlsZS1tb2RhbFwiLFxyXG4gIGVkaXRQcm9maWxlRm9ybTogXCIjZWRpdC1wcm9maWxlLWZvcm1cIixcclxuICBhZGRDYXJkTW9kYWw6IFwiI2FkZC1jYXJkLW1vZGFsXCIsXHJcbiAgdXNlck5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fdGl0bGVcIixcclxuICB1c2VyQWJvdXRTZWxlY3RvcjogXCIucHJvZmlsZV9fc3VidGl0bGVcIixcclxuICBpbWFnZU1vZGFsOiBcIiNpbWFnZS1tb2RhbFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVBYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fc3VidGl0bGVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZUlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLm1vZGFsX19pbnB1dF90eXBlX25hbWVcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUFib3V0SW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIubW9kYWxfX2lucHV0X3R5cGVfYWJvdXRcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ1dHRvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtZm9ybVwiKTtcclxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IGNvbmZpZy5lcnJvckNsYXNzO1xyXG5cclxuICAgIHRoaXMuX2Zvcm0gPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMgPSBBcnJheS5mcm9tKFxyXG4gICAgICB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcclxuICAgICk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5faW5wdXRFbGVtZW50cy5ldmVyeShcclxuICAgICAgKGlucHV0RWxlbWVudCkgPT4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLmlucHV0RWxlbWVudHMpKSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRFbGVtZW50cywgdGhpcy5fc3VibWl0QnV0dG9uLCBjb25maWcpO1xyXG5cclxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShcclxuICAgICAgICAgIHRoaXMuX2lucHV0RWxlbWVudHMsXHJcbiAgICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b24sXHJcbiAgICAgICAgICBjb25maWdcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uRWxlbWVudCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsX29wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUNsb3NlT25Fc2NhcGUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbCgpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlQ2xvc2VPbkVzY2FwZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlQ2xvc2VPbkVzY2FwZSA9IChldnQpID0+IHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9oYW5kbGVDbG9zZU9uQ2xpY2soZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LnRhcmdldCA9PT0gdGhpcy5fcG9wdXBFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKTtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNsb3NlT25DbGljayhldnQpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX21vZGFsRm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fbW9kYWxGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2lucHV0XCIpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBmb3JtRGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1vZGFsKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5fbW9kYWxGb3JtKTtcclxuICAgIHRoaXMuX21vZGFsRm9ybS5yZXNldCgpO1xyXG4gICAgc3VwZXIuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQ7XHJcblxyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHRoaXMuX2dldElucHV0VmFsdWVzKCk7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xyXG5cclxuaW1wb3J0IHByb2ZpbGVEZWZhdWx0IGZyb20gXCIuLi9pbWFnZXMvamFjcXVlcy1jb3VzdGVhdS5qcGdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgY29uZmlnLFxyXG4gIHNlbGVjdG9ycyxcclxuICBpbml0aWFsQ2FyZHMsXHJcbiAgcHJvZmlsZU5hbWVJbnB1dFZhbHVlLFxyXG4gIHByb2ZpbGVBYm91dElucHV0VmFsdWUsXHJcbiAgYWRkQ2FyZEJ1dHRvbixcclxuICBlZGl0UHJvZmlsZUJ1dHRvbixcclxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcblxyXG5jb25zdCBwcm9maWxlUGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1pbWFnZVwiKTtcclxucHJvZmlsZVBpY3R1cmUuc3JjID0gcHJvZmlsZURlZmF1bHQ7XHJcblxyXG5mdW5jdGlvbiBmaWxsUHJvZmlsZUZvcm0oKSB7XHJcbiAgY29uc3QgeyBuYW1lLCBhYm91dCB9ID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBwcm9maWxlTmFtZUlucHV0VmFsdWUudmFsdWUgPSBuYW1lO1xyXG4gIHByb2ZpbGVBYm91dElucHV0VmFsdWUudmFsdWUgPSBhYm91dDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2FyZChkYXRhKSB7XHJcbiAgY29uc3QgY2FyZERhdGEgPSBjcmVhdGVDYXJkKGRhdGEpO1xyXG4gIGNhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZERhdGEpO1xyXG59XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyhcclxuICBzZWxlY3RvcnMudXNlck5hbWVTZWxlY3RvcixcclxuICBzZWxlY3RvcnMudXNlckFib3V0U2VsZWN0b3JcclxuKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZE9iamVjdCkgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChcclxuICAgIHtcclxuICAgICAgZGF0YTogY2FyZE9iamVjdCxcclxuICAgICAgaGFuZGxlSW1hZ2VDbGljazogKGltZ0RhdGEpID0+IHtcclxuICAgICAgICBjYXJkUHJldmlld1BvcHVwLm9wZW5Nb2RhbChpbWdEYXRhKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlXHJcbiAgKTtcclxuICByZXR1cm4gY2FyZC5nZXRWaWV3KCk7XHJcbn07XHJcblxyXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcclxuICAgICAgcmVuZGVyQ2FyZChkYXRhKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBcIiNjYXJkcy1saXN0XCJcclxuKTtcclxuXHJcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XHJcblxyXG5jb25zdCBjYXJkUHJldmlld1BvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKHNlbGVjdG9ycy5pbWFnZU1vZGFsKTtcclxuXHJcbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHNlbGVjdG9ycy5hZGRDYXJkTW9kYWwsIChkYXRhKSA9PiB7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IHsgdGl0bGU6IGRhdGEudGl0bGUsIGxpbms6IGRhdGEubGluayB9O1xyXG4gIHJlbmRlckNhcmQobmV3Q2FyZCk7XHJcbiAgYWRkQ2FyZFBvcHVwLmNsb3NlTW9kYWwoKTtcclxufSk7XHJcblxyXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXHJcbiAgc2VsZWN0b3JzLmVkaXRQcm9maWxlTW9kYWwsXHJcbiAgKGRhdGEpID0+IHtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcclxuICAgICAgdXNlck5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgdXNlckFib3V0OiBkYXRhLmFib3V0LFxyXG4gICAgfSk7XHJcbiAgICBlZGl0UHJvZmlsZVBvcHVwLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcbik7XHJcblxyXG5jYXJkUHJldmlld1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5hZGRDYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBhZGRDYXJkUG9wdXAub3Blbk1vZGFsKCk7XHJcbiAgYWRkRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG5lZGl0UHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGZpbGxQcm9maWxlRm9ybSgpO1xyXG4gIGVkaXRQcm9maWxlUG9wdXAub3Blbk1vZGFsKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxyXG4gIGNvbmZpZyxcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWZvcm1cIilcclxuKTtcclxuXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgY29uZmlnLFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLWZvcm1cIilcclxuKTtcclxuXHJcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgYmFzZVVybDogXCJodHRwczovL25vbW9yZXBhcnRpZXMuY29tL3YxL2dyb3VwLTQyXCIsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogXCJmYTAwMmVhYS1jZmRjLTQ5YjItYmE3YS03NjQwZWI0Njg3NDJcIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IodXNlck5hbWVTZWxlY3RvciwgdXNlckFib3V0U2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3VzZXJOYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlck5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl91c2VyQWJvdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyQWJvdXRTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX3VzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCxcclxuICAgICAgYWJvdXQ6IHRoaXMuX3VzZXJBYm91dEVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyB1c2VyTmFtZSwgdXNlckFib3V0IH0pIHtcclxuICAgIHRoaXMuX3VzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHVzZXJOYW1lO1xyXG4gICAgdGhpcy5fdXNlckFib3V0RWxlbWVudC50ZXh0Q29udGVudCA9IHVzZXJBYm91dDtcclxuICB9XHJcbn1cclxuIiwiY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyBkYXRhLCBoYW5kbGVJbWFnZUNsaWNrIH0sIGNhcmRTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLl90aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgfVxyXG5cclxuICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZC10ZW1wbGF0ZVwiKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGdldFZpZXcoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuXHJcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcbiAgICBjb25zdCBjYXB0aW9uRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19jYXB0aW9uXCIpO1xyXG4gICAgdGhpcy5fY2FyZExpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XHJcbiAgICB0aGlzLl9jYXJkRGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1pY29uXCIpO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG5cclxuICAgIGltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IHRoaXMuX3RpdGxlO1xyXG4gICAgY2FwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlTGlrZUljb24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9jYXJkTGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xyXG4gIH07XHJcblxyXG4gIF9oYW5kbGVEZWxldGVDYXJkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gIH07XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2NhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVMaWtlSWNvbik7XHJcblxyXG4gICAgdGhpcy5fY2FyZERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCk7XHJcblxyXG4gICAgdGhpcy5fY2FyZEltYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMuX2RhdGEpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtcygpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2godGhpcy5fcmVuZGVyZXIpO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGFkZE5ld0l0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX2NhcmRDYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoeyB0aXRsZSwgbGluayB9KSB7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aXRsZTtcclxuICAgIHRoaXMuX2NhcmRDYXB0aW9uLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgc3VwZXIub3Blbk1vZGFsKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3IoeyBiYXNlVXJsLCBoZWFkZXJzIH0pIHtcclxuICAgIHRoaXMudXJsID0gYmFzZVVybDtcclxuICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU2VydmVyUmVzcG9uc2UocmVzKSB7XHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGBFcnJvciAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFsQ2FyZHMoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXAtNDIvY2FyZHNcIiwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICB9KS50aGVuKHRoaXMuX2hhbmRsZVNlcnZlclJlc3BvbnNlKTtcclxuXHJcbiAgICAvL290aGVyIEFQSSBtZXRob2RzXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsInByb2ZpbGVOYW1lSW5wdXRWYWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2ZpbGVBYm91dElucHV0VmFsdWUiLCJlZGl0UHJvZmlsZUJ1dHRvbiIsImFkZENhcmRCdXR0b24iLCJjb25zdHJ1Y3RvciIsImZvcm1FbGVtZW50IiwidGhpcyIsIl9pbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJfZm9ybSIsIl9pbnB1dEVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl9zdWJtaXRCdXR0b24iLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvckVsZW1lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJyZW1vdmUiLCJfdG9nZ2xlSW5wdXRFcnJvciIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGFzSW52YWxpZElucHV0IiwiZXZlcnkiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dEVsZW1lbnRzIiwiZGlzYWJsZWQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImVuYWJsZVZhbGlkYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0VmFsaWRhdGlvbiIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsImtleSIsImNsb3NlTW9kYWwiLCJfcG9wdXBFbGVtZW50IiwiX2Nsb3NlQnV0dG9uRWxlbWVudCIsIm9wZW5Nb2RhbCIsIl9oYW5kbGVDbG9zZU9uRXNjYXBlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVDbG9zZU9uQ2xpY2siLCJ0YXJnZXQiLCJzZXRFdmVudExpc3RlbmVycyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9tb2RhbEZvcm0iLCJfaW5wdXRMaXN0IiwiX2dldElucHV0VmFsdWVzIiwiZm9ybURhdGEiLCJpbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsImlucHV0VmFsdWVzIiwicmVuZGVyQ2FyZCIsImRhdGEiLCJjYXJkRGF0YSIsImNyZWF0ZUNhcmQiLCJjYXJkU2VjdGlvbiIsImFkZEl0ZW0iLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsInVzZXJJbmZvIiwidXNlck5hbWVTZWxlY3RvciIsInVzZXJBYm91dFNlbGVjdG9yIiwiX3VzZXJOYW1lRWxlbWVudCIsIl91c2VyQWJvdXRFbGVtZW50IiwiZ2V0VXNlckluZm8iLCJhYm91dCIsInNldFVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyQWJvdXQiLCJjYXJkT2JqZWN0IiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlSW1hZ2VDbGljayIsIl9jYXJkTGlrZUJ1dHRvbiIsInRvZ2dsZSIsIl9lbGVtZW50IiwiX2RhdGEiLCJfdGl0bGUiLCJ0aXRsZSIsIl9saW5rIiwibGluayIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX2NhcmRTZWxlY3RvciIsIl9nZXRUZW1wbGF0ZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZXRWaWV3IiwiaW1hZ2VFbGVtZW50IiwiY2FwdGlvbkVsZW1lbnQiLCJfY2FyZERlbGV0ZUJ1dHRvbiIsIl9jYXJkSW1hZ2VCdXR0b24iLCJhbHQiLCJfaGFuZGxlTGlrZUljb24iLCJfaGFuZGxlRGVsZXRlQ2FyZCIsImltZ0RhdGEiLCJjYXJkUHJldmlld1BvcHVwIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiZWxlbWVudCIsInByZXBlbmQiLCJhZGROZXdJdGVtIiwiYXBwZW5kIiwiX2NhcmRJbWFnZSIsIl9jYXJkQ2FwdGlvbiIsImFkZENhcmRQb3B1cCIsImVkaXRQcm9maWxlUG9wdXAiLCJhZGRGb3JtVmFsaWRhdG9yIiwiZmlsbFByb2ZpbGVGb3JtIiwiRm9ybVZhbGlkYXRvciIsImJhc2VVcmwiLCJoZWFkZXJzIiwidXJsIiwiX2hhbmRsZVNlcnZlclJlc3BvbnNlIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImdldEluaXRpYWxDYXJkcyIsImZldGNoIiwidGhlbiIsImF1dGhvcml6YXRpb24iXSwic291cmNlUm9vdCI6IiJ9