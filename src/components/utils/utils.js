export const handleCloseOnEscape = (evt) => {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector.contains(".modal__open");
    this.closeModal(activeModal);
  }
};

export const openModal = (modal) => {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", this.__handleCloseOnEscape);
};

export const closeModal = (modal) => {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", this.__handleCloseOnEscape);
};
