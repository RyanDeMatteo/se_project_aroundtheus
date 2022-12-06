// render a list of elements on a page

//constructor with { items, renderer }, cssClassSelector
//public function - renderItems()
//renders all elements on page
//the renderer() will render each element

//public method addItem()
//takes a DOM element and adds it to the container

//Section class does not have markup, it receives through the callback
//function and inserts it in the container
export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
