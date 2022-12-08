import Card from "./Card.js";

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
