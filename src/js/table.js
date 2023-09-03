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

class AppTableRow extends HTMLTableRowElement {
  constructor() {
    super();

    this.onEvents();

  }

  get dataKey(){
    return this.getAttribute('data-key');
  }
  
  onEvents() {
    this.find('input')?.addEventListener('input', (e) => {
      const value = e.target.value;

      console.log('value', value);
    });

    this.find('.on-check-done')?.addEventListener('change', (e) => {
      const key = this.dataKey;
      console.log('on-check-done', key);
    });

    this.find('.on-check-undone')?.addEventListener('click', (e) => {
      const key = this.dataKey;
      console.log('on-check-undone', key);
    });

    this.find('.on-add')?.addEventListener('click', (e) => {
      const key = this.dataKey;
      console.log('on-add', key);
    });

    this.find('.on-edit')?.addEventListener('click', (e) => {
      const key = this.dataKey;
      console.log('on-add', key);
    });

    this.find('.on-dbl-click-edit')?.addEventListener('click', (e) => {
      const key = this.dataKey;
      console.log('on-add', key);
    });

    this.find('.on-delete')?.addEventListener('click', (e) => {
      const key = this.dataKey;
      console.log('on-delete', key);
    });
  }


}

customElements.define("list-table", AppTable, {extends: 'table'});

customElements.define("list-table-tr", AppTableRow, {extends: 'tr'});