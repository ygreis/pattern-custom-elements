class RootApp extends HTMLDivElement {

  table = null;

  constructor() {
    super();

    this.table = this.find('table');

    this.table.thead = [
      '<th>#</th>',
      '<th>O que preciso fazer?</th>',
      '<th class="w-25">Ação</th>',
    ];

    this.proxy();

  }

  proxy() {

    let tableItems = setState('tableItems', [
        `<tr data-key="1" class="bg-secondary text-decoration-line-through" is="list-table-tr">
          <td><input type="checkbox" name="todo-check" checked class="on-check-done"/></td>
          <td>Ir ao mercado</td>
          <td class="actions"><button type="button" class="btn btn-outline-light btn-sm on-check-undone">Refazer</button></td>
        </tr>`,
        `<tr data-key="2" is="list-table-tr">
          <td><input type="checkbox" name="todo-check" class="on-check-done"/></td>
          <td class="on-dbl-click-edit">Ir a academia</td>
          <td class="actions">
            <button type="button" class="btn btn-secondary btn-sm on-edit">Editar</button>
            <button type="button" class="btn btn-sm btn-danger on-delete">Excluir</button>
          </td>
        </tr>
        `,
        `<tr is="list-table-tr">
            <td></td>
            <td class="p-0"><input type="text" class="form-control w-100 b-none on-input" style="height: 48px !important; box-shadow: none; border: none;"/></td>
            <td class="actions">
              <button type="button" class="btn btn-sm btn-primary on-add">Adicionar</button>
            </td>
          </tr>`,
      ]);

    // Comente a linha de baixo para exibir o resultado acima.
    /*tableItems.value = [
      `<tr>
        <td></td>
        <td class="p-0"><input type="text" class="form-control w-100 b-none" style="height: 48px !important; box-shadow: none; border: none;"/></td>
        <td class="actions">
          <button type="button" class="btn btn-sm btn-primary">Adicionar</button>
          <button type="button" class="btn btn-sm btn-danger">Excluir</button>
        </td>
      </tr>`
    ]*/

  }

  setHtml(html) {
    this.innerHTML += html;
  }
}

customElements.define("root-app", RootApp, {extends: 'div'});