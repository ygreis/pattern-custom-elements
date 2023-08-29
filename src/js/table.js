class AppTable extends HTMLTableElement {
  constructor() {
    super();

    this.theadHTML = '';
    this.tbodyHTML = '';

    console.log('list-table', this);

  }
  
  get theadEl() {
    return this.find('thead');
  }

  get tbodyEl() {
    return this.find('tbody');
  }

  set thead(elements) {
    console.log('elements thead', elements);
    elements?.forEach((item) => {
      this.theadHTML += item;
    });
    this.insertAdjacentHTML('afterbegin', `<thead><tr>${this.theadHTML}</tr></thead>`);
  }

  set tbody(elements) {
    console.log('elements tbody', elements);
    elements?.forEach((item) => {
      this.tbodyHTML += item;
    });
    this.insertAdjacentHTML('beforeend', `<tbody>${this.tbodyHTML}</tbody>`);
  }

}

customElements.define("list-table", AppTable, {extends: 'table'});