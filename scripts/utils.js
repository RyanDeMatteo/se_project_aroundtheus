import Card from "./Card.js";

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalOnEscape);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalOnEscape);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModalOnEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

export const renderElements = () => {
  cardList.innerHTML = "";
  items.forEach((item) => {
    const card = new Card(
      {
        data,
        handleImageClick: (imgData) => {
          CardPreviewPopup.openModal(imgData);
        },
      },
      selectors.cardTemplate
    );

    const cardElement = card.getView();

    cardSection.prepend(cardElement);
  });
};
