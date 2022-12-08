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
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems(items) {
    this.clear();

    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
