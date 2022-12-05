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
  constructor({ renderer, selector }) {
    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  renderItems(data) {
    //use this._renderer to create the elements for rendering
    //forEach maybe
  }

  addItems(item) {
    //prepend
    //take the item and render it into this._element
  }
}
