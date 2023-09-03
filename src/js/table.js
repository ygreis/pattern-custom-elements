class AppTable extends HTMLTableElement {
  constructor() {
    super();

    this.insertAdjacentHTML('afterbegin', `<thead></thead>`);
    this.insertAdjacentHTML('beforeend', `<tbody></tbody>`);

    var itemsTable = useState('tableItems');

    useWatch((itemsTable) => {
      this.tbody = itemsTable.value;
    }, [itemsTable])

  }
  
  get theadEl() {
    return this.find('thead');
  }

  get tbodyEl() {
    return this.find('tbody');
  }

  set thead(elements) {
    let html = '';
    elements?.forEach((item) => {
      html += item;
    });
    this.theadEl.innerHTML = html;
  }

  set tbody(elements) {
    let html = '';
    elements?.forEach((item) => {
      html += item;
    });
    this.tbodyEl.innerHTML = html;
  }

}

customElements.define("list-table", AppTable, {extends: 'table'});