class AppTable extends HTMLTableElement {
  
  constructor() {
    super();

    this.insertAdjacentHTML('afterbegin', `<thead></thead>`);
    this.insertAdjacentHTML('beforeend', `<tbody></tbody>`);

    var itemsTable = useState('tableItems');

    useWatch((itemsTable) => {
      console.log('itemsTable', itemsTable);
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

  set tbody(items) {
    let html = '';

    items?.forEach((item) => {
      html += this.#createRow(item);
    });

    html += this.#createRowStore();

    this.tbodyEl.innerHTML = html;
  }

  #createRow(item) {

    return `
      <tr data-key="${item.id}" class="${item.check && 'bg-secondary text-decoration-line-through'}" is="list-table-tr">
        <td><input type="checkbox" name="todo-check" ${item.check && 'checked'} class="on-check"/></td>
        ${item.isEdit ? `
          <td class="p-0">
            <input type="text" class="form-control w-100 b-none on-input-add" style="height: 48px !important; box-shadow: none; border: none;" value="${item.value}"/>
          </td>` : 
          `<td >${item.value}</td>
        `}
        <td class="actions">
          ${item.check ? `
            <button type="button" class="btn btn-outline-light btn-sm on-check-undone">Refazer</button>
          ` : 
            `${item.isEdit ? `
              <button type="button" class="btn btn-secondary btn-sm on-edit-save">Salvar</button>` : 
              `<button type="button" class="btn btn-secondary btn-sm on-edit">Editar</button>`
            }
          `}
          <button type="button" class="btn btn-sm btn-danger on-delete">Excluir</button>
        </td>
      </tr>  
    `;

  }

  #createRowStore() {
    return `
      <tr is="list-table-tr">
        <td></td>
        <td class="p-0"><input type="text" class="form-control w-100 b-none on-input-add" style="height: 48px !important; box-shadow: none; border: none;"/></td>
        <td class="actions">
          <button type="button" class="btn btn-sm btn-primary on-add">Adicionar</button>
        </td>
      </tr>
    `;
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

    this.find('.on-check')?.addEventListener('change', (e) => {
      const isChecked = e.target?.checked;

      if(isChecked){
        TodoList.check(this.dataKey);
      } else {
        TodoList.uncheck(this.dataKey);
      }

    });

    this.find('.on-check-undone')?.addEventListener('click', () => {
      TodoList.uncheck(this.dataKey);
    });

    this.find('.on-add')?.addEventListener('click', () => {
      TodoList.add(this.find('.on-input-add').value);
    });

    this.find('.on-edit')?.addEventListener('click', () => {
      TodoList.updateItem(this.dataKey, {isEdit: true});
    });

    this.find('.on-edit-save')?.addEventListener('click', () => {
      TodoList.updateItem(this.dataKey, {
        isEdit: false,
        value: this.find('.on-input-add').value
      });
    });

    this.find('.on-delete')?.addEventListener('click', () => {
      TodoList.delete(this.dataKey);
    });
  }


}

customElements.define("list-table", AppTable, {extends: 'table'});

customElements.define("list-table-tr", AppTableRow, {extends: 'tr'});